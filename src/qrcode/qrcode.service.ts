import { CommunityPrivacy, User } from "@prisma/client";

import { BaseResult } from "../models/base-error.dto";
import { CurrentUser } from "src/user/current-user.decorator";
import { Family } from "@generated/family/family.model";
import { Injectable } from "@nestjs/common";
import { Item } from "@generated/item/item.model";
import { PaginationArgs } from "../shared/types/pagination.input";
import { PrismaService } from "../prisma.service";
import { UseGuards } from "@nestjs/common";
import { nanoid } from "nanoid";

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

  async createStorage(name: string, userId: number) {
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
  }

  async removeStorage(id: number) {
    return await this.prismaService.storage.delete({
      where: {
        id: id,
      },
    });
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
    code: string
  ): Promise<BaseResult> {
    try {
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
    containerId: number
  ): Promise<BaseResult> {
    try {
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
              userId: userId, // ← CORRETO
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
}
