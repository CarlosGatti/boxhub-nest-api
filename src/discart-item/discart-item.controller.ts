import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  UseGuards,
} from "@nestjs/common";
import { User } from "@prisma/client";

import { DiscartItemService } from "./discart-item.service";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";
import { CurrentUser } from "../user/current-user.decorator";

@Controller("items")
export class DiscartItemController {
  constructor(private readonly discartService: DiscartItemService) {}

  @Get()
  async list(
    @Query("type") type?: string,
    @Query("category") category?: string,
    @Query("search") search?: string
  ) {
    const items = await this.discartService.findAll({
      type: type as any,
      category,
      search,
    });
    return items;
  }

  @Get(":id")
  async getOne(@Param("id", ParseIntPipe) id: number) {
    return this.discartService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@CurrentUser() user: User, @Body() body: any) {
    // Validar campos obrigatórios
    if (!body || typeof body !== "object") {
      throw new BadRequestException("Request body is required");
    }

    if (!body.title) {
      throw new BadRequestException("title is required");
    }

    if (!body.description) {
      throw new BadRequestException("description is required");
    }

    if (!body.type) {
      throw new BadRequestException("type is required");
    }

    if (!body.category) {
      throw new BadRequestException("category is required");
    }

    if (!body.condition) {
      throw new BadRequestException("condition is required");
    }

    if (!body.contactPhone) {
      throw new BadRequestException("contactPhone is required");
    }

    return this.discartService.create(
      {
        title: body.title,
        description: body.description,
        type: body.type,
        price: body.price,
        category: body.category,
        condition: body.condition,
        contactPhone: body.contactPhone,
        imageUrls: body.imageUrls,
        pickupCondoName: body.pickupAddress?.condoName,
        pickupBuilding: body.pickupAddress?.building,
        pickupUnit: body.pickupAddress?.unit,
        pickupNotes: body.pickupAddress?.notes,
      },
      user
    );
  }

  @UseGuards(JwtAuthGuard)
  @Patch(":id")
  async update(
    @Param("id", ParseIntPipe) id: number,
    @CurrentUser() user: User,
    @Body() body: any
  ) {
    return this.discartService.update(id, body, user);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(":id")
  async remove(
    @Param("id", ParseIntPipe) id: number,
    @CurrentUser() user: User
  ) {
    return this.discartService.remove(id, user);
  }
}


