import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ForbiddenException } from '@nestjs/common';
import { JwtAuthGuard } from 'src/core/auth/guards/jwt-auth.guard';
import { PremiumRequestsService } from './premium-requests.service';
import { CreateReviewCardPremiumRequestDto } from './dto/create-review-card-premium-request.dto';
import { UpdateReviewCardPremiumRequestDto } from './dto/update-review-card-premium-request.dto';

@Controller('review-cards/premium-requests')
export class PremiumRequestsController {
  constructor(private readonly premiumRequestsService: PremiumRequestsService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  async create(@Req() req: any, @Body() input: CreateReviewCardPremiumRequestDto) {
    return this.premiumRequestsService.create(req.user.id, input);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  async list(@Req() req: any) {
    if (req.user?.isAdmin) {
      return this.premiumRequestsService.listAll();
    }
    return this.premiumRequestsService.listOwn(req.user.id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  async updateStatus(
    @Req() req: any,
    @Param('id', ParseIntPipe) id: number,
    @Body() input: UpdateReviewCardPremiumRequestDto,
  ) {
    if (!req.user?.isAdmin) {
      throw new ForbiddenException('Admin access required');
    }
    return this.premiumRequestsService.updateStatus(id, input);
  }
}
