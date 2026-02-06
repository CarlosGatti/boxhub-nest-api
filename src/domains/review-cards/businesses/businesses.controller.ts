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
import { JwtAuthGuard } from 'src/core/auth/guards/jwt-auth.guard';
import { BusinessesService } from './businesses.service';
import { CreateReviewCardBusinessDto } from './dto/create-review-card-business.dto';
import { UpdateReviewCardBusinessDto } from './dto/update-review-card-business.dto';

@Controller('review-cards/businesses')
@UseGuards(JwtAuthGuard)
export class BusinessesController {
  constructor(private readonly businessesService: BusinessesService) {}

  @Post()
  async create(@Req() req: any, @Body() input: CreateReviewCardBusinessDto) {
    return this.businessesService.create(req.user.id, input);
  }

  @Get()
  async list(@Req() req: any) {
    return this.businessesService.list(req.user.id);
  }

  @Get(':id')
  async get(@Req() req: any, @Param('id', ParseIntPipe) id: number) {
    return this.businessesService.get(req.user.id, id);
  }

  @Patch(':id')
  async update(
    @Req() req: any,
    @Param('id', ParseIntPipe) id: number,
    @Body() input: UpdateReviewCardBusinessDto,
  ) {
    return this.businessesService.update(req.user.id, id, input);
  }
}
