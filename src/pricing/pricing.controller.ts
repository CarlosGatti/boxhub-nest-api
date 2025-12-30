import {
  Controller,
  Get,
  Post,
  Param,
  Query,
  UseGuards,
  Headers,
  ParseIntPipe,
  ForbiddenException,
} from '@nestjs/common';
import { PricingService } from './pricing.service';
import { JwtRestGuard } from '../auth/guards/jwt-rest.guard';
import { AppPermissionRestGuard, RequireAppRest } from '../auth/guards/app-permission-rest.guard';

@Controller()
export class PricingController {
  constructor(private readonly pricingService: PricingService) {}

  @Get('quotes')
  @UseGuards(JwtRestGuard, AppPermissionRestGuard)
  @RequireAppRest('WEALTH_TRACKER')
  async getQuote(@Query('ticker') ticker: string) {
    if (!ticker) {
      return { error: 'Ticker parameter is required' };
    }
    return this.pricingService.getQuote(ticker);
  }

  @Get('assets/:id/prices')
  @UseGuards(JwtRestGuard, AppPermissionRestGuard)
  @RequireAppRest('WEALTH_TRACKER')
  async getAssetPrices(
    @Param('id', ParseIntPipe) id: number,
    @Query('range') range?: '1D' | '1M' | '1Y',
  ) {
    return this.pricingService.getAssetPrices(id, range);
  }

  @Post('prices/sync')
  async syncPrices(@Headers('x-admin-key') adminKey?: string) {
    const requiredKey = process.env.ADMIN_SYNC_KEY;
    
    if (requiredKey && adminKey !== requiredKey) {
      throw new ForbiddenException('Invalid admin key');
    }

    return this.pricingService.syncAllPrices();
  }
}
