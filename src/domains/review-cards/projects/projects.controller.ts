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
import { ProjectsService } from './projects.service';
import { CreateReviewCardProjectDto } from './dto/create-review-card-project.dto';
import { UpdateReviewCardProjectDto } from './dto/update-review-card-project.dto';

@Controller('review-cards/projects')
@UseGuards(JwtAuthGuard)
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Post()
  async create(@Req() req: any, @Body() input: CreateReviewCardProjectDto) {
    return this.projectsService.create(req.user.id, input);
  }

  @Get()
  async list(@Req() req: any) {
    return this.projectsService.list(req.user.id);
  }

  @Get(':id')
  async get(@Req() req: any, @Param('id', ParseIntPipe) id: number) {
    return this.projectsService.get(req.user.id, id);
  }

  @Patch(':id')
  async update(
    @Req() req: any,
    @Param('id', ParseIntPipe) id: number,
    @Body() input: UpdateReviewCardProjectDto,
  ) {
    return this.projectsService.update(req.user.id, id, input);
  }

  @Post(':id/publish')
  async publish(@Req() req: any, @Param('id', ParseIntPipe) id: number) {
    return this.projectsService.publish(req.user.id, id);
  }
}
