import { BaseResult } from "../models/base-error.dto";
import { CurrentUser } from "src/user/current-user.decorator";
import { Injectable } from "@nestjs/common";
import { Item } from "@generated/item/item.model";
import { LogAction } from "@prisma/client";
import { PaginationArgs } from "../shared/types/pagination.input";
import { PrismaService } from "../prisma.service";
import { UseGuards } from "@nestjs/common";
import { createLog } from "../services/create-log";
// Removido o import direto do nanoid
// import { nanoid } from "nanoid";

@Injectable()
export class QrcodeService {
  constructor(private prismaService: PrismaService) {}

  async getAllStorages() {
    return await this.prismaService.storage.findMany({
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

  async getStorage(id: number) {
    return await this.prismaService.storage.findUnique({
      where: {
        id: id,
      },
    });
  }

  async createStorage(name: string, userId: number,
    ipAddress: string) {

     const { nanoid } = await import("nanoid");


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
        storageId: nanoid(),
        name,
        ipAddress,
      },
    });
    return {
      success: true,
      message: "Storage created successfully",
    };
  }

  async removeStorage(id: number,     userId: number,
    ipAddress: string) {

    
     const { nanoid } = await import("nanoid");

    return await this.prismaService.storage.delete({
      where: {
        id: id,
      },
    });

    await createLog({
      action: LogAction.STORAGE_DELETED,
      userId,
      details: `Storage deleted: ${id}`,
      route: "removeStorage",
      metadata: {
        storageId: nanoid(),
        ipAddress,
      },
    });

    return {
      success: true,
      message: "Storage removed successfully",
    };


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
      // Importação dinâmica do nanoid ANTES de criar o container
      const { nanoid } = await import("nanoid");

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
          containerId: nanoid(),
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

  async getContainerByCode(code: string) {
    return await this.prismaService.container.findUnique({
      where: {
        code: code,
      },
      include: {
        storage: true,
        items: true,
      },
    });
  }

  async getContainerById(id: number) {
    return await this.prismaService.container.findUnique({
      where: {
        id: id,
      },
      include: {
        storage: true,
        items: true,
      },
    });
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

            const { nanoid } = await import("nanoid");
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
          itemId: nanoid(),
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
  async getItemById(id: number) {
    return await this.prismaService.item.findUnique({
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
      const { nanoid } = await import("nanoid");

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
          containerId: nanoid(),
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
}
