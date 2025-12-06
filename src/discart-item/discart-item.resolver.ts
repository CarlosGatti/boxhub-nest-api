import { Args, Int, Mutation, Query, Resolver } from "@nestjs/graphql";
import { UseGuards } from "@nestjs/common";

import { DiscartItemService } from "./discart-item.service";
import { DiscartItem } from "../../@generated/discart-item/discart-item.model";
import { DiscartItemType } from "../../@generated/prisma/discart-item-type.enum";
import { DiscartItemCondition } from "../../@generated/prisma/discart-item-condition.enum";
import { DiscartItemCategory } from "../../@generated/prisma/discart-item-category.enum";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";
import { CurrentUser } from "../user/current-user.decorator";
import { User } from "../../@generated/user/user.model";
import { CreateDiscartItemInput } from "./dto/create-discart-item.input";
import { UpdateDiscartItemStatusInput } from "./dto/update-discart-item-status.input";
import { DiscartSummary } from "./dto/discart-summary.dto";
import { DiscartItemStatus } from "../../@generated/prisma/discart-item-status.enum";

@Resolver(() => DiscartItem)
export class DiscartItemResolver {
  constructor(private readonly discartService: DiscartItemService) {}

  @Query(() => [DiscartItem])
  async discartItems(
    @Args("type", { type: () => DiscartItemType, nullable: true })
    type?: DiscartItemType | "ALL",
    @Args("category", { type: () => String, nullable: true })
    category?: string,
    @Args("search", { type: () => String, nullable: true })
    search?: string,
    @CurrentUser() currentUser?: User
  ) {
    // Query pública - todos podem ver itens, mas dados sensíveis são filtrados baseado em isApprovedResident
    const user = currentUser ? {
      id: currentUser.id,
      isApprovedResident: (currentUser as any).isApprovedResident ?? false,
    } : undefined;
    
    return this.discartService.findAll({ type, category, search }, user);
  }

  @Query(() => DiscartItem, { nullable: true })
  async discartItem(
    @Args("id", { type: () => Int }) id: number,
    @CurrentUser() currentUser?: User
  ) {
    // Query pública - todos podem ver itens, mas dados sensíveis são filtrados baseado em isApprovedResident
    const user = currentUser ? {
      id: currentUser.id,
      isApprovedResident: (currentUser as any).isApprovedResident ?? false,
    } : undefined;
    
    return this.discartService.findOne(id, user);
  }

  @UseGuards(JwtAuthGuard)
  @Query(() => DiscartSummary)
  async discartSummary(@CurrentUser() user: User): Promise<DiscartSummary> {
    return this.discartService.getSummary((user as unknown) as any);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => DiscartItem)
  async createDiscartItem(
    @Args("data") data: CreateDiscartItemInput,
    @CurrentUser() user: User
  ) {
    return this.discartService.create(
      {
        title: data.title,
        description: data.description,
        type: data.type,
        price: data.price ?? null,
        category: data.category || 'OTHER',
        condition: data.condition,
        contactPhone: data.contactPhone ?? undefined,
        imageUrls: data.imageUrls ?? [],
        pickupCondoName: data.pickupAddress?.condoName ?? null,
        pickupBuilding: data.pickupAddress?.building ?? null,
        pickupUnit: data.pickupAddress?.unit ?? null,
        pickupNotes: data.pickupAddress?.notes ?? null,
      },
      (user as unknown) as any
    );
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => DiscartItem)
  async updateDiscartItem(
    @Args("id", { type: () => Int }) id: number,
    @CurrentUser() user: User,
    @Args("title", { nullable: true }) title?: string,
    @Args("description", { nullable: true }) description?: string,
    @Args("type", { type: () => DiscartItemType, nullable: true })
    type?: DiscartItemType,
    @Args("price", {
      type: () => Number,
      nullable: true,
    })
    price?: number | null,
    @Args("category", { type: () => String, nullable: true }) category?: string,
    @Args("condition", {
      type: () => DiscartItemCondition,
      nullable: true,
    })
    condition?: DiscartItemCondition,
    @Args("contactPhone", { nullable: true }) contactPhone?: string,
    @Args({ name: "imageUrls", type: () => [String], nullable: true })
    imageUrls?: string[] | null,
    @Args("pickupCondoName", { type: () => String, nullable: true })
    pickupCondoName?: string | null,
    @Args("pickupBuilding", { type: () => String, nullable: true })
    pickupBuilding?: string | null,
    @Args("pickupUnit", { type: () => String, nullable: true })
    pickupUnit?: string | null,
    @Args("pickupNotes", { type: () => String, nullable: true })
    pickupNotes?: string | null
  ) {
    const input = {
      title,
      description,
      type,
      price,
      category,
      condition,
      contactPhone,
      imageUrls: imageUrls ?? undefined,
      pickupCondoName,
      pickupBuilding,
      pickupUnit,
      pickupNotes,
    };

    return this.discartService.update(id, input, (user as unknown) as any);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => DiscartItem)
  async updateDiscartItemStatus(
    @Args("data") data: UpdateDiscartItemStatusInput,
    @CurrentUser() user: User
  ) {
    return this.discartService.updateStatus(
      data.id,
      data.status,
      (user as unknown) as any
    );
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => DiscartItem)
  async deleteDiscartItem(
    @Args("id", { type: () => Int }) id: number,
    @CurrentUser() user: User
  ) {
    return this.discartService.remove(id, (user as unknown) as any);
  }
}


