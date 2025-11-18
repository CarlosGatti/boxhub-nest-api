import { DiscartItemController } from "./discart-item.controller";
import { DiscartItemResolver } from "./discart-item.resolver";
import { DiscartItemService } from "./discart-item.service";
import { Module } from "@nestjs/common";
import { PrismaService } from "../prisma.service";

@Module({
  controllers: [DiscartItemController],
  providers: [DiscartItemService, DiscartItemResolver, PrismaService],
  exports: [DiscartItemService],
})
export class DiscartItemModule {}


