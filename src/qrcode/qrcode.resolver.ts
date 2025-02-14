import { Args, Float, Mutation, Query, Resolver } from "@nestjs/graphql";

import { BaseResult } from "../models/base-error.dto";
import { CurrentUser } from "../user/current-user.decorator";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";
import { PaginationArgs } from "../shared/types/pagination.input";
import { PublicationComment } from "../../@generated/publication-comment/publication-comment.model";
import { QrcodeService } from "./qrcode.service";
import { UseGuards } from "@nestjs/common";
import { User } from "@prisma/client";
import { Family } from "@generated/family/family.model";
import { Item } from "@generated/item/item.model";
import { Container } from "@generated/container/container.model";
import { DashboardData } from "./dashboard.dto";

@Resolver(() => Family)
export class QrcodeResolver {
  constructor(private readonly qrcodeService: QrcodeService) {}

  @Query(() => Family)
  @UseGuards(JwtAuthGuard)
  async getFamily(@Args("id") id: number) {
    return this.qrcodeService.getFamily(id);
  }

  @Query(() => [Family])
  @UseGuards(JwtAuthGuard)
  async getAllFamilies() {
    return this.qrcodeService.getAllFamilies();
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

  //create a family
  @Mutation(() => Family)
  @UseGuards(JwtAuthGuard)
  async createFamily(@Args("name") name: string) {
    return this.qrcodeService.createFamily(name);
  }

  //delete a family
  @Mutation(() => Family)
  @UseGuards(JwtAuthGuard)
  async removeFamily(@Args("id") id: number) {
    return this.qrcodeService.removeFamily(id);
  }

  //add a member to a family
  @Mutation(() => Family)
  @UseGuards(JwtAuthGuard)
  async addMemberToFamily(
    @Args("familyId") familyId: number,
    @Args("userId") userId: number
  ) {
    return this.qrcodeService.addMemberToFamily(familyId, userId);
  }

  @Mutation(() => BaseResult)
  @UseGuards(JwtAuthGuard)
  async createContainer(
    @Args("familyId") familyId: number,
    @Args("name") name: string,
    @Args("description") description: string,
    @Args("qrCode") qrCode: string,
    @Args("code") code: string
  ): Promise<BaseResult> {
    return this.qrcodeService.createContainer(
      familyId,
      name,
      description,
      qrCode,
      code
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
    @Args("containerId") containerId: number
  ): Promise<BaseResult> {
    return this.qrcodeService.createItem(
      name,
      description,
      imageUrl,
      quantity,
      category,
      containerId
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
      console.log('Fetched Items:', items);
      return items;
  }

  @UseGuards(JwtAuthGuard)
  @Query(() => DashboardData)
  async getDashboardData(@CurrentUser() user: User) {
    return this.qrcodeService.getDashboardData(user.id);
  }

}
