import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
  ParseIntPipe,
} from '@nestjs/common';
import { PortfoliosService } from './portfolios.service';
import { CreatePortfolioDto } from './dto/create-portfolio.dto';
import { UpdatePortfolioDto } from './dto/update-portfolio.dto';
import { JwtRestGuard } from '../auth/guards/jwt-rest.guard';
import { AppPermissionRestGuard, RequireAppRest } from '../auth/guards/app-permission-rest.guard';
import { Request } from 'express';

@Controller('portfolios')
@UseGuards(JwtRestGuard, AppPermissionRestGuard)
@RequireAppRest('WEALTH_TRACKER')
export class PortfoliosController {
  constructor(private readonly portfoliosService: PortfoliosService) {}

  @Post()
  create(@Req() req: Request, @Body() createPortfolioDto: CreatePortfolioDto) {
    const user = (req as any).user;
    return this.portfoliosService.create(user.id, createPortfolioDto);
  }

  @Get()
  findAll(@Req() req: Request) {
    const user = (req as any).user;
    return this.portfoliosService.findAll(user.id);
  }

  @Get(':id')
  findOne(@Req() req: Request, @Param('id', ParseIntPipe) id: number) {
    const user = (req as any).user;
    return this.portfoliosService.findOne(id, user.id);
  }

  @Patch(':id')
  update(
    @Req() req: Request,
    @Param('id', ParseIntPipe) id: number,
    @Body() updatePortfolioDto: UpdatePortfolioDto,
  ) {
    const user = (req as any).user;
    return this.portfoliosService.update(id, user.id, updatePortfolioDto);
  }

  @Delete(':id')
  remove(@Req() req: Request, @Param('id', ParseIntPipe) id: number) {
    const user = (req as any).user;
    return this.portfoliosService.remove(id, user.id);
  }
}
