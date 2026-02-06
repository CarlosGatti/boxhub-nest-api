import { Controller, Get, Query } from '@nestjs/common';
import { TemplatesService } from './templates.service';

@Controller('review-cards/templates')
export class TemplatesController {
  constructor(private readonly templatesService: TemplatesService) {}

  @Get()
  async list(
    @Query('aspect') aspect?: string,
    @Query('category') category?: string,
  ) {
    return this.templatesService.list({ aspect, category });
  }
}
