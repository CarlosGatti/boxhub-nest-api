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
import { HoldingsService } from './holdings.service';
import { CreateHoldingDto } from './dto/create-holding.dto';
import { UpdateHoldingDto } from './dto/update-holding.dto';
import { JwtRestGuard } from '../auth/guards/jwt-rest.guard';
import { AppPermissionRestGuard, RequireAppRest } from '../auth/guards/app-permission-rest.guard';
import { Request } from 'express';

@Controller()
@UseGuards(JwtRestGuard, AppPermissionRestGuard)
@RequireAppRest('WEALTH_TRACKER')
export class HoldingsController {
  constructor(private readonly holdingsService: HoldingsService) {}

  @Post('portfolios/:portfolioId/holdings')
  create(
    @Req() req: Request,
    @Param('portfolioId', ParseIntPipe) portfolioId: number,
    @Body() createHoldingDto: CreateHoldingDto,
  ) {
    const user = (req as any).user;
    return this.holdingsService.create(portfolioId, user.id, createHoldingDto);
  }

  @Get('portfolios/:portfolioId/holdings')
  findAll(
    @Req() req: Request,
    @Param('portfolioId', ParseIntPipe) portfolioId: number,
  ) {
    const user = (req as any).user;
    return this.holdingsService.findAll(portfolioId, user.id);
  }

  @Get('holdings/:id')
  findOne(@Req() req: Request, @Param('id', ParseIntPipe) id: number) {
    const user = (req as any).user;
    return this.holdingsService.findOne(id, user.id);
  }

  @Patch('holdings/:id')
  update(
    @Req() req: Request,
    @Param('id', ParseIntPipe) id: number,
    @Body() updateHoldingDto: UpdateHoldingDto,
  ) {
    const user = (req as any).user;
    return this.holdingsService.update(id, user.id, updateHoldingDto);
  }

  @Delete('holdings/:id')
  remove(@Req() req: Request, @Param('id', ParseIntPipe) id: number) {
    const user = (req as any).user;
    return this.holdingsService.remove(id, user.id);
  }
}
