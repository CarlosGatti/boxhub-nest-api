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

  async getAllFamilies() {
    return await this.prismaService.family.findMany({
      include: {
        members: true,
      },
    });
  }

  async getFamily(id: number) {
    return await this.prismaService.family.findUnique({
      where: {
        id: id,
      },
    });
  }

  async createFamily(name: string) {
    return await this.prismaService.family.create({
      data: {
        name: name,
      },
    });
  }

  async removeFamily(id: number) {
    return await this.prismaService.family.delete({
      where: {
        id: id,
      },
    });
  }

  async addMemberToFamily(familyId: number, userId: number) {
    return await this.prismaService.family.update({
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
    familyId: number,
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
          family: {
            connect: { id: familyId },
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
        family: true,
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
        family: true,
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
        where: { family: { members: { some: { id: userId } } } },
        include: { items: true },
    });
}

async getAllItemsByUser(userId: number) {
    console.log('User ID:', userId);
    return this.prismaService.item.findMany({
        where: {
            container: {
                family: {
                    members: {
                        some: { id: userId }, // Verifica se o usuário é membro da família
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
    const totalContainers = await this.prismaService.container.count({
      where: {
        family: {
          members: {
            some: {
              id: userId,
            },
          },
        },
      },
    });

    const totalItems = await this.prismaService.item.count({
      where: {
        container: {
          family: {
            members: {
              some: {
                id: userId,
              },
            },
          },
        },
      },
    });

    const recentContainers = await this.prismaService.container.findMany({
      where: {
        family: {
          members: {
            some: {
              id: userId,
            },
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
      take: 5,
    });

    return {
      totalContainers,
      totalItems,
      recentContainers,
    };
  }


  

}
