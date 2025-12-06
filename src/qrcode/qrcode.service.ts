import { BaseResult } from "../models/base-error.dto";
import { CurrentUser } from "src/user/current-user.decorator";
import { Injectable, ForbiddenException, NotFoundException } from "@nestjs/common";
import { Item } from "@generated/item/item.model";
import { LogAction, DiscartItemType, DiscartItemCategory, DiscartItemCondition } from "@prisma/client";
import { PaginationArgs } from "../shared/types/pagination.input";
import { PrismaService } from "../prisma.service";
import { UseGuards } from "@nestjs/common";
import { createLog } from "../services/create-log";

// Removido o import direto do nanoid
// import { nanoid } from "nanoid";

@Injectable()
export class QrcodeService {
  constructor(private prismaService: PrismaService) {}

  /**
   * Verifica se o usuário tem acesso a um storage
   * @param storageId ID do storage
   * @param userId ID do usuário
   * @returns true se o usuário tem acesso, false caso contrário
   */
  private async hasStorageAccess(storageId: number, userId: number): Promise<boolean> {
    const membership = await this.prismaService.storageMember.findFirst({
      where: {
        storageId,
        userId,
      },
    });
    return !!membership;
  }

  /**
   * Verifica se o usuário é ADMIN de um storage
   * @param storageId ID do storage
   * @param userId ID do usuário
   * @returns true se o usuário é ADMIN, false caso contrário
   */
  private async isStorageAdmin(storageId: number, userId: number): Promise<boolean> {
    const membership = await this.prismaService.storageMember.findFirst({
      where: {
        storageId,
        userId,
        role: "ADMIN",
      },
    });
    return !!membership;
  }

  /**
   * Verifica se o usuário tem acesso a um container (através do storage)
   * @param containerId ID do container
   * @param userId ID do usuário
   * @returns true se o usuário tem acesso, false caso contrário
   */
  private async hasContainerAccess(containerId: number, userId: number): Promise<boolean> {
    const container = await this.prismaService.container.findUnique({
      where: { id: containerId },
      include: {
        storage: {
          include: {
            members: true,
          },
        },
      },
    });

    if (!container) {
      return false;
    }

    return container.storage.members.some((member) => member.userId === userId);
  }

  /**
   * Verifica se o usuário tem acesso a um item (através do container e storage)
   * @param itemId ID do item
   * @param userId ID do usuário
   * @returns true se o usuário tem acesso, false caso contrário
   */
  private async hasItemAccess(itemId: number, userId: number): Promise<boolean> {
    const item = await this.prismaService.item.findUnique({
      where: { id: itemId },
      include: {
        container: {
          include: {
            storage: {
              include: {
                members: true,
              },
            },
          },
        },
      },
    });

    if (!item) {
      return false;
    }

    return item.container.storage.members.some((member) => member.userId === userId);
  }

  async getAllStorages(userId: number) {
    // Retorna apenas storages onde o usuário é membro
    return await this.prismaService.storage.findMany({
      where: {
        members: {
          some: {
            userId,
          },
        },
      },
      include: {
        members: {
          include: {
            user: true,
          },
        },
      },
    });
  }

  async getUserStorages(userId: number) {
    const memberships = await this.prismaService.storageMember.findMany({
      where: {
        userId,
      },
      include: {
        storage: {
          include: {
            containers: {
              include: {
                items: true,
              },
            },
            members: {
              include: {
                user: true,
              },
            },
          },
        },
      },
    });

    return memberships.map((membership) => membership.storage);
  }

  async getStorage(id: number, userId: number) {
    // Verifica se o usuário tem acesso ao storage
    const hasAccess = await this.hasStorageAccess(id, userId);
    if (!hasAccess) {
      throw new ForbiddenException("You don't have access to this storage");
    }

    return await this.prismaService.storage.findUnique({
      where: {
        id: id,
      },
      include: {
        members: {
          include: {
            user: true,
          },
        },
      },
    });
  }

  async createStorage(name: string, userId: number, ipAddress: string) {
    const { randomUUID } = await import("crypto");

    return await this.prismaService.storage.create({
      data: {
        name,
        members: {
          create: {
            user: {
              connect: { id: userId },
            },
            role: "ADMIN",
          },
        },
      },
      include: {
        members: true,
      },
    });

    await createLog({
      action: LogAction.STORAGE_CREATED,
      userId,
      details: `Storage created: ${name}`,
      route: "createStorage",
      metadata: {
        storageId: randomUUID(),
        name,
        ipAddress,
      },
    });
    return {
      success: true,
      message: "Storage created successfully",
    };
  }

  // qrcode.service.ts
async removeStorage(id: number, userId: number, ipAddress: string) {
  // Verifica se o usuário é ADMIN do storage
  const isAdmin = await this.isStorageAdmin(id, userId);
  if (!isAdmin) {
    throw new ForbiddenException("Only storage admins can delete storage");
  }

  const { randomUUID } = await import('crypto');

  const deleted = await this.prismaService.$transaction(async (tx) => {
    await tx.storageMember.deleteMany({ where: { storageId: id } });
    await tx.container.deleteMany({ where: { storageId: id } });
    return tx.storage.delete({ where: { id } });
  });

  await createLog({
    action: LogAction.STORAGE_DELETED,
    userId,
    details: `Storage deleted: ${deleted.id}`,
    route: 'removeStorage',
    metadata: { storageId: randomUUID(), ipAddress },
  });

  return deleted;            // ⬅️ devolve exatamente um Storage
}

  async addMemberToStorage(familyId: number, userId: number) {
    return await this.prismaService.storage.update({
      where: {
        id: familyId,
      },
      data: {
        members: {
          connect: {
            id: userId,
          },
        },
      },
    });
  }

  async createContainer(
    storageId: number,
    name: string,
    description: string,
    qrCode: string,
    code: string,
    userId: number,
    ipAddress: string
  ): Promise<BaseResult> {
    try {
      // Verifica se o usuário tem acesso ao storage
      const hasAccess = await this.hasStorageAccess(storageId, userId);
      if (!hasAccess) {
        throw new ForbiddenException("You don't have access to this storage");
      }

      // Importação dinâmica do nanoid ANTES de criar o container
      const { randomUUID } = await import("crypto");

      // Criação do container
      await this.prismaService.container.create({
        data: {
          name,
          description,
          qrCode,
          code,
          storage: {
            connect: { id: storageId },
          },
        },
      });

      // Criação do log
      await createLog({
        action: LogAction.CONTAINER_CREATED,
        userId,
        details: `Container criado: ${name}`,
        route: "createContainer",
        metadata: {
          containerId: randomUUID(),
          storageId,
          name,
          description,
          qrCode,
          code,
        },
        ipAddress,
      });

      return {
        success: true,
        message: "Container created successfully",
      };
    } catch (error) {
      if (error.code === "P2002") {
        return {
          success: false,
          message: `Duplicate value for unique field: ${error.meta?.target}`,
        };
      }
      throw error;
    }
  }

  async getContainerByCode(code: string, userId: number) {
    const container = await this.prismaService.container.findUnique({
      where: {
        code: code,
      },
      include: {
        storage: {
          include: {
            members: true,
          },
        },
        items: true,
      },
    });

    if (!container) {
      throw new NotFoundException("Container not found");
    }

    // Verifica se o usuário tem acesso ao storage do container
    const hasAccess = container.storage.members.some((member) => member.userId === userId);
    if (!hasAccess) {
      throw new ForbiddenException("You don't have access to this container");
    }

    return container;
  }

  async getContainerById(id: number, userId: number) {
    const container = await this.prismaService.container.findUnique({
      where: {
        id: id,
      },
      include: {
        storage: {
          include: {
            members: true,
          },
        },
        items: true,
      },
    });

    if (!container) {
      throw new NotFoundException("Container not found");
    }

    // Verifica se o usuário tem acesso ao storage do container
    const hasAccess = container.storage.members.some((member) => member.userId === userId);
    if (!hasAccess) {
      throw new ForbiddenException("You don't have access to this container");
    }

    return container;
  }

  async createItem(
    name: string,
    description: string,
    imageUrl: string,
    quantity: number,
    category: string,
    containerId: number,
    userId: number,
    ipAddress: string
  ): Promise<BaseResult> {
    try {
      // Verifica se o usuário tem acesso ao container
      const hasAccess = await this.hasContainerAccess(containerId, userId);
      if (!hasAccess) {
        throw new ForbiddenException("You don't have access to this container");
      }

      const { randomUUID } = await import("crypto");
      await this.prismaService.item.create({
        data: {
          name,
          description,
          imageUrl,
          quantity,
          category,
          container: {
            connect: { id: containerId },
          },
        },
      });

      await createLog({
        action: LogAction.ITEM_CREATED,
        userId,
        details: `Item created: ${name}`,
        route: "createItem",
        metadata: {
          itemId: randomUUID(),
          name,
          description,
          imageUrl,
          quantity,
          category,
          containerId,
          ipAddress,
        },
        ipAddress,
      });

      return {
        success: true,
        message: "Item created successfully",
      };
    } catch (error) {
      if (error.code === "P2002") {
        return {
          success: false,
          message: `Duplicate value for unique field: ${error.meta?.target}`,
        };
      }
      throw error;
    }
  }

  //find item by id
  async getItemById(id: number, userId: number) {
    const item = await this.prismaService.item.findUnique({
      where: {
        id: id,
      },
      include: {
        container: {
          include: {
            storage: {
              include: {
                members: {
                  include: {
                    user: true,
                  },
                },
              },
            },
          },
        },
      },
    });

    if (!item) {
      throw new NotFoundException("Item not found");
    }

    // Verifica se o usuário tem acesso ao item
    const hasAccess = await this.hasItemAccess(id, userId);
    if (!hasAccess) {
      throw new ForbiddenException("You don't have access to this item");
    }

    return item;
  }

  async getAllContainersByUser(userId: number) {
    return this.prismaService.container.findMany({
      where: { storage: { members: { some: { id: userId } } } },
      include: { items: true },
    });
  }

  async getAllItemsByUser(userId: number) {
    return this.prismaService.item.findMany({
      where: {
        container: {
          storage: {
            members: {
              some: {
                userId: userId,
              },
            },
          },
        },
      },
      include: {
        container: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });
  }

  async getDashboardData(userId: number) {
    const totalStorages = await this.prismaService.storage.count({
      where: {
        members: {
          some: {
            userId: userId,
          },
        },
      },
    });

    const totalContainers = await this.prismaService.container.count({
      where: {
        storage: {
          members: {
            some: {
              userId: userId,
            },
          },
        },
      },
    });

    const totalItems = await this.prismaService.item.count({
      where: {
        container: {
          storage: {
            members: {
              some: {
                userId: userId,
              },
            },
          },
        },
      },
    });

    const recentContainers = await this.prismaService.container.findMany({
      where: {
        storage: {
          members: {
            some: {
              userId: userId,
            },
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
      take: 5,
    });

    return {
      totalStorages,
      totalContainers,
      totalItems,
      recentContainers,
    };
  }

  //edit item
  async editItem(
    itemId: number,
    name: string,
    description: string,
    imageUrl: string,
    quantity: number,
    category: string,
    userId: number,
    ipAddress: string
  ): Promise<BaseResult> {
    try {
      // Verifica se o usuário tem acesso ao item
      const hasAccess = await this.hasItemAccess(itemId, userId);
      if (!hasAccess) {
        throw new ForbiddenException("You don't have access to this item");
      }

      const { randomUUID } = await import("crypto");

      await this.prismaService.item.update({
        where: { id: itemId },
        data: {
          name,
          description,
          imageUrl,
          quantity,
          category,
        },
      });

      await createLog({
        action: LogAction.ITEM_UPDATED,
        userId,
        details: `Item created: ${name}`,
        route: "editItem",
        metadata: {
          itemId,
          name,
          description,
          imageUrl,
          quantity,
          category,
          containerId: randomUUID(),
          ipAddress,
        },
        ipAddress,
      });

      return {
        success: true,
        message: "Item updated successfully",
      };
    } catch (error) {
      if (error.code === "P2002") {
        return {
          success: false,
          message: `Duplicate value for unique field: ${error.meta?.target}`,
        };
      }
      throw error;
    }
  }

  /**
   * Doa um item do BoxHub para o Discart-me
   * Cria um DiscartItem baseado no Item e marca o Item como doado
   */
  async donateItemToDiscartMe(
    itemId: number,
    userId: number,
    type: DiscartItemType = "DONATE",
    price?: number | null,
    contactPhone?: string | null
  ) {
    // Verifica se o usuário tem acesso ao item
    const hasAccess = await this.hasItemAccess(itemId, userId);
    if (!hasAccess) {
      throw new ForbiddenException("You don't have access to this item");
    }

    // Busca o item completo
    const item = await this.prismaService.item.findUnique({
      where: { id: itemId },
      include: {
        container: {
          include: {
            storage: {
              include: {
                members: {
                  include: {
                    user: true,
                  },
                },
              },
            },
          },
        },
      },
    });

    if (!item) {
      throw new NotFoundException("Item not found");
    }

    // Verifica se já foi doado
    if (item.donatedToDiscartMe) {
      throw new ForbiddenException("This item has already been donated");
    }

    // Busca o usuário para pegar informações de contato
    const user = await this.prismaService.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new NotFoundException("User not found");
    }

    // Mapeia a categoria do Item para DiscartItemCategory
    const categoryMap: Record<string, DiscartItemCategory> = {
      FURNITURE: DiscartItemCategory.FURNITURE,
      ELECTRONICS: DiscartItemCategory.ELECTRONICS,
      KIDS: DiscartItemCategory.KIDS,
      SPORTS: DiscartItemCategory.SPORTS,
      BOOK: DiscartItemCategory.BOOK,
    };

    const discartCategory =
      categoryMap[item.category?.toUpperCase()] || DiscartItemCategory.OTHER;

    // Cria o DiscartItem usando transação para garantir consistência
    const result = await this.prismaService.$transaction(async (tx) => {
      // Cria o DiscartItem
      const discartItem = await tx.discartItem.create({
        data: {
          title: item.name,
          description: item.description || `Item doado do BoxHub: ${item.name}`,
          type: type,
          price: type === "SELL" ? price ?? null : null,
          category: discartCategory,
          condition: DiscartItemCondition.USED, // Itens do BoxHub são considerados usados
          status: "ACTIVE",
          imageUrls: item.imageUrl ? [item.imageUrl] : [],
          contactPhone: contactPhone || user.contactPhone || null,
          createdBy: {
            connect: { id: userId },
          },
        },
        include: {
          createdBy: true,
        },
      });

      // Marca o Item como doado
      await tx.item.update({
        where: { id: itemId },
        data: {
          donatedToDiscartMe: true,
          discartItemId: discartItem.id,
          donatedAt: new Date(),
        },
      });

      return discartItem;
    });

    return result;
  }
}
