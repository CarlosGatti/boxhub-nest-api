import { DiscartItem, Prisma, User } from "@prisma/client";
import { ForbiddenException, Injectable, NotFoundException } from "@nestjs/common";

import { PrismaService } from "../prisma.service";

// Helper function to normalize category values from frontend to enum
function normalizeCategory(category: string | null | undefined): string {
  if (!category) return 'OTHER';
  
  const upper = category.toUpperCase().trim();
  
  // Map valid enum values
  const validCategories = ['FURNITURE', 'ELECTRONICS', 'KIDS', 'SPORTS', 'OTHER', 'BOOK'];
  if (validCategories.includes(upper)) {
    return upper;
  }
  
  // Map common variations
  const lower = category.toLowerCase().trim();
  if (lower === 'book' || lower === 'books') {
    return 'BOOK';
  }
  if (lower === 'furniture' || lower === 'furnitures') {
    return 'FURNITURE';
  }
  if (lower === 'electronics' || lower === 'electronic') {
    return 'ELECTRONICS';
  }
  if (lower === 'kids' || lower === 'kid' || lower === 'children') {
    return 'KIDS';
  }
  if (lower === 'sports' || lower === 'sport') {
    return 'SPORTS';
  }
  if (lower === 'other' || lower === 'others' || lower === 'general') {
    return 'OTHER';
  }
  
  // Default fallback
  return 'OTHER';
}

type DiscartItemCreateInputDto = {
  title: string;
  description: string;
  type: string;
  price?: number | null;
  category?: string; // Can be enum value or string for backward compatibility
  condition: string;
  contactPhone?: string | null; // Opcional; se não fornecido, usar do usuário
  imageUrls?: string[];
  pickupCondoName?: string | null;
  pickupBuilding?: string | null;
  pickupUnit?: string | null;
  pickupNotes?: string | null;
};

type DiscartItemUpdateInputDto = Partial<DiscartItemCreateInputDto>;

@Injectable()
export class DiscartItemService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(filters: {
    type?: Prisma.DiscartItemWhereInput["type"] | string;
    category?: Prisma.DiscartItemWhereInput["category"] | string;
    search?: string;
  }): Promise<DiscartItem[]> {
    const where: Prisma.DiscartItemWhereInput = {};

    if (filters.type && filters.type !== ("ALL" as any)) {
      where.type = filters.type as any;
    }

    if (filters.category) {
      // Normalize category filter to match enum values
      const normalizedCategory = normalizeCategory(filters.category as string);
      where.category = normalizedCategory as any;
    }

    if (filters.search) {
      const q = filters.search;
      where.OR = [
        { title: { contains: q, mode: "insensitive" } },
        { description: { contains: q, mode: "insensitive" } },
        { contactPhone: { contains: q, mode: "insensitive" } },
      ];
    }

    return this.prisma.discartItem.findMany({
      where,
      include: { createdBy: true },
      orderBy: { createdAt: "desc" },
    });
  }

  async findOne(id: number): Promise<DiscartItem> {
    const item = await this.prisma.discartItem.findUnique({
      where: { id },
      include: { createdBy: true },
    });

    if (!item) {
      throw new NotFoundException("Item not found");
    }

    return item;
  }

  async create(input: DiscartItemCreateInputDto, user: User): Promise<DiscartItem> {
    // Buscar usuário completo para pegar contactPhone se necessário
    const fullUser = await this.prisma.user.findUnique({
      where: { id: user.id },
    });

    // Se contactPhone não foi fornecido, usar do usuário logado
    const contactPhone = input.contactPhone ?? (fullUser as any)?.contactPhone ?? null;

    const pickupAddress = {
      condoName: input.pickupCondoName,
      building: input.pickupBuilding,
      unit: input.pickupUnit,
      notes: input.pickupNotes,
    };

    const data: Prisma.DiscartItemCreateInput = {
      title: input.title,
      description: input.description,
      type: input.type as any,
      price: input.type === "SELL" ? input.price ?? 0 : null,
      category: normalizeCategory(input.category) as any, // Normalize category value
      condition: input.condition as any,
      status: "ACTIVE" as any,
      contactPhone,
      imageUrls: input.imageUrls ?? [],
      pickupAddress,
      createdBy: { connect: { id: user.id } },
    };

    return this.prisma.discartItem.create({
      data,
      include: { createdBy: true },
    });
  }

  async update(
    id: number,
    input: DiscartItemUpdateInputDto,
    user: User
  ): Promise<DiscartItem> {
    const existing = await this.prisma.discartItem.findUnique({
      where: { id },
    });

    if (!existing) {
      throw new NotFoundException("Item not found");
    }

    if (existing.createdById !== user.id && !(user as any).isAdmin) {
      throw new ForbiddenException("Not allowed");
    }

    const pickupAddress =
      input.pickupCondoName !== undefined ||
      input.pickupBuilding !== undefined ||
      input.pickupUnit !== undefined ||
      input.pickupNotes !== undefined
        ? {
            condoName:
              input.pickupCondoName !== undefined
                ? input.pickupCondoName
                : (existing.pickupAddress as any)?.condoName,
            building:
              input.pickupBuilding !== undefined
                ? input.pickupBuilding
                : (existing.pickupAddress as any)?.building,
            unit:
              input.pickupUnit !== undefined
                ? input.pickupUnit
                : (existing.pickupAddress as any)?.unit,
            notes:
              input.pickupNotes !== undefined
                ? input.pickupNotes
                : (existing.pickupAddress as any)?.notes,
          }
        : undefined;

    const data: Prisma.DiscartItemUpdateInput = {
      title: input.title,
      description: input.description,
      type: input.type ? (input.type as any) : undefined,
      price:
        input.type === "SELL"
          ? (input.price ?? 0)
          : input.type === "DONATE"
          ? null
          : input.price ?? undefined,
      category: input.category ? (normalizeCategory(input.category) as any) : undefined,
      condition: input.condition ? (input.condition as any) : undefined,
      contactPhone: input.contactPhone,
      imageUrls: input.imageUrls ?? undefined,
      pickupAddress,
    };

    return this.prisma.discartItem.update({
      where: { id },
      data,
      include: { createdBy: true },
    });
  }

  async remove(id: number, user: User): Promise<DiscartItem> {
    const existing = await this.prisma.discartItem.findUnique({
      where: { id },
    });

    if (!existing) {
      throw new NotFoundException("Item not found");
    }

    if (existing.createdById !== user.id && !(user as any).isAdmin) {
      throw new ForbiddenException("Not allowed");
    }

    return this.prisma.discartItem.delete({
      where: { id },
    });
  }

  async updateStatus(
    id: number,
    status: string,
    user: User
  ): Promise<DiscartItem> {
    const existing = await this.prisma.discartItem.findUnique({
      where: { id },
    });

    if (!existing) {
      throw new NotFoundException("Item not found");
    }

    if (existing.createdById !== user.id && !(user as any).isAdmin) {
      throw new ForbiddenException("Not allowed");
    }

    return this.prisma.discartItem.update({
      where: { id },
      data: { status: status as any },
      include: { createdBy: true },
    });
  }

  async getSummary(user: User): Promise<{
    totalActiveSellCount: number;
    totalActiveSellValue: number;
    totalSoldCount: number;
    totalDonatedCount: number;
  }> {
    // Considerar apenas itens do próprio usuário (ajuste conforme regra de negócio)
    const whereBase = { createdById: user.id };

    const [activeSell, sold, donated] = await Promise.all([
      this.prisma.discartItem.findMany({
        where: { ...whereBase, type: "SELL", status: "ACTIVE" },
        select: { price: true },
      }),
      this.prisma.discartItem.count({
        where: { ...whereBase, status: "SOLD" },
      }),
      this.prisma.discartItem.count({
        where: { ...whereBase, status: "DONATED" as any },
      }),
    ]);

    const totalActiveSellCount = activeSell.length;
    const totalActiveSellValue = activeSell.reduce(
      (sum, item) => sum + (item.price ?? 0),
      0,
    );

    return {
      totalActiveSellCount,
      totalActiveSellValue,
      totalSoldCount: sold,
      totalDonatedCount: donated,
    };
  }
}


