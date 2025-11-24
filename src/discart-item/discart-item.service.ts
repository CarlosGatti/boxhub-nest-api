import { DiscartItem, Prisma, User } from "@prisma/client";
import { ForbiddenException, Injectable, NotFoundException } from "@nestjs/common";

import { PrismaService } from "../prisma.service";

type DiscartItemCreateInputDto = {
  title: string;
  description: string;
  type: string;
  price?: number | null;
  category?: string; // Can be enum value or string for backward compatibility
  condition: string;
  contactPhone: string;
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
      where.category = filters.category as any;
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
      category: (input.category as any) || "OTHER", // Default to OTHER if not provided
      condition: input.condition as any,
      status: "ACTIVE" as any,
      contactPhone: input.contactPhone,
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
      category: input.category ? (input.category as any) : undefined,
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
}


