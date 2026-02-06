import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/core/auth/guards/jwt-auth.guard';
import { ExportsService } from './exports.service';
import { CreateReviewCardExportDto } from './dto/create-review-card-export.dto';

@Controller('review-cards')
@UseGuards(JwtAuthGuard)
export class ExportsController {
  constructor(private readonly exportsService: ExportsService) {}

  @Post('projects/:id/exports')
  async create(
    @Req() req: any,
    @Param('id', ParseIntPipe) id: number,
    @Body() input: CreateReviewCardExportDto,
  ) {
    return this.exportsService.create(req.user.id, id, input);
  }

  @Get('exports/:id')
  async get(@Req() req: any, @Param('id', ParseIntPipe) id: number) {
    return this.exportsService.get(req.user.id, id);
  }
}
