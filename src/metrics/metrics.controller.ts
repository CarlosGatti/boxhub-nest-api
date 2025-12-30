import {
  Controller,
  Get,
  Param,
  UseGuards,
  Req,
  ParseIntPipe,
} from '@nestjs/common';
import { MetricsService } from './metrics.service';
import { JwtRestGuard } from '../auth/guards/jwt-rest.guard';
import { AppPermissionRestGuard, RequireAppRest } from '../auth/guards/app-permission-rest.guard';
import { Request } from 'express';

@Controller()
@UseGuards(JwtRestGuard, AppPermissionRestGuard)
@RequireAppRest('WEALTH_TRACKER')
export class MetricsController {
  constructor(private readonly metricsService: MetricsService) {}

  @Get('portfolios/:id/summary')
  getPortfolioSummary(
    @Req() req: Request,
    @Param('id', ParseIntPipe) id: number,
  ) {
    const user = (req as any).user;
    return this.metricsService.getPortfolioSummary(id, user.id);
  }

  @Get('portfolios/:id/allocation')
  getPortfolioAllocation(
    @Req() req: Request,
    @Param('id', ParseIntPipe) id: number,
  ) {
    const user = (req as any).user;
    return this.metricsService.getPortfolioAllocation(id, user.id);
  }

  @Get('networth/summary')
  getNetWorthSummary(@Req() req: Request) {
    const user = (req as any).user;
    return this.metricsService.getNetWorthSummary(user.id);
  }
}
