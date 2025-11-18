import { Args, Float, Mutation, Query, Resolver } from "@nestjs/graphql";

import { BaseResult } from "../models/base-error.dto";
import { CurrentUser } from "../user/current-user.decorator";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";
import { Context } from "@nestjs/graphql";
import { QrcodeService } from "./qrcode.service";
import { UseGuards } from "@nestjs/common";
import { User } from "@prisma/client";
import { Item } from "@generated/item/item.model";
import { Container } from "@generated/container/container.model";
import { DashboardData } from "./dashboard.dto";
import { Storage } from "@generated/storage/storage.model";
import { ProGuard } from "src/auth/guards/pro.guard";
@Resolver(() => Storage)
export class QrcodeResolver {
  constructor(private readonly qrcodeService: QrcodeService) {}

  @Query(() => Storage)
  @UseGuards(JwtAuthGuard)
  async getStorage(@Args("id") id: number) {
    return this.qrcodeService.getStorage(id);
  }

  @Query(() => [Storage])
  @UseGuards(JwtAuthGuard, ProGuard)
  async getAllStorages() {
    return this.qrcodeService.getAllStorages();
  }

  //get container by code
  @Query(() => Container)
  @UseGuards(JwtAuthGuard)
  async getContainerByCode(@Args("code") code: string) {
    return this.qrcodeService.getContainerByCode(code);
  }

  //get container by id
  @Query(() => Container)
  @UseGuards(JwtAuthGuard)
  async getContainerById(@Args("id") id: number) {
    return this.qrcodeService.getContainerById(id);
  }

  @Mutation(() => Storage)
  @UseGuards(JwtAuthGuard)
  async createStorage(@Args("name") name: string, @CurrentUser() user: any, @Context() context: any) {
    return this.qrcodeService.createStorage(name, user.id, context.req.ip || context.req.headers["x-forwarded-for"] || "");
  }

  @Query(() => [Storage])
  @UseGuards(JwtAuthGuard)
  async getMyStorages(@CurrentUser() user: User) {
    return this.qrcodeService.getUserStorages(user.id);
  }

@Mutation(() => Storage)
@UseGuards(JwtAuthGuard)
async removeStorage(
  @Args("id") id: number,
  @CurrentUser() user: User,
  @Context() context: any
): Promise<Storage> {
  const ipAddress =
    context.req.ip || context.req.headers["x-forwarded-for"] || "";
  return this.qrcodeService.removeStorage(id, user.id, ipAddress);
} 

  //add a member to a storage
  @Mutation(() => Storage)
  @UseGuards(JwtAuthGuard)
  async addMemberToStorage(
    @Args("storageId") storageId: number,
    @Args("userId") userId: number
  ) {
    return this.qrcodeService.addMemberToStorage(storageId, userId);
  }

  @Mutation(() => BaseResult)
  @UseGuards(JwtAuthGuard)
  async createContainer(
    @Args("storageId") storageId: number,
    @Args("name") name: string,
    @Args("description") description: string,
    @Args("qrCode") qrCode: string,
    @Args("code") code: string,
    @CurrentUser() user: User,
    @Context() context: any
  ): Promise<BaseResult> {
    const ipAddress =
      context.req.ip || context.req.headers["x-forwarded-for"] || "";

    return this.qrcodeService.createContainer(
      storageId,
      name,
      description,
      qrCode,
      code,
      user.id,
      ipAddress
    );
  }

  //criar item
  @Mutation(() => BaseResult)
  @UseGuards(JwtAuthGuard)
  async createItem(
    @Args("name") name: string,
    @Args("description") description: string,
    @Args("imageUrl") imageUrl: string,
    @Args("quantity") quantity: number,
    @Args("category") category: string,
    @Args("containerId") containerId: number,
    @CurrentUser() user: User,
    @Context() context: any
  ): Promise<BaseResult> {
    return this.qrcodeService.createItem(
      name,
      description,
      imageUrl,
      quantity,
      category,
      containerId,
      user.id,
      context.req.ip || context.req.headers["x-forwarded-for"] || ""
    );
  }

  @Query(() => [Container])
  @UseGuards(JwtAuthGuard)
  async getAllContainers(@CurrentUser() user: User) {
    return this.qrcodeService.getAllContainersByUser(user.id);
  }
  @Query(() => [Item])
  @UseGuards(JwtAuthGuard)
  async getAllItems(@CurrentUser() user: User) {
    const items = await this.qrcodeService.getAllItemsByUser(user.id);
    console.log("Fetched Items:", items);
    return items;
  }

  //get item by id
  @Query(() => Item)
  @UseGuards(JwtAuthGuard)
  async getItemById(@Args("id") id: number) {
    return this.qrcodeService.getItemById(id);
  }

  @UseGuards(JwtAuthGuard)
  @Query(() => DashboardData)
  async getDashboardData(@CurrentUser() user: User) {
    return this.qrcodeService.getDashboardData(user.id);
  }

  //edit item
  @Mutation(() => BaseResult)
  @UseGuards(JwtAuthGuard)
  async editItem(
    @Args("id") id: number,
    @Args("name") name: string,
    @Args("description") description: string,
    @Args("imageUrl") imageUrl: string,
    @Args("quantity", { type: () => Float }) quantity: number,
    @Args("category") category: string,
    @CurrentUser() user: User,
    @Context() context: any
  ): Promise<BaseResult> {
    const ipAddress =
      context.req.ip || context.req.headers["x-forwarded-for"] || "";

    return this.qrcodeService.editItem(
      id,
      name,
      description,
      imageUrl,
      quantity,
      category,
      user.id,
      ipAddress
    );
  }
}
