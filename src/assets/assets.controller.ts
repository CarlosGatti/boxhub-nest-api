import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  UseGuards,
  ParseIntPipe,
} from '@nestjs/common';
import { AssetsService } from './assets.service';
import { CreateAssetDto } from './dto/create-asset.dto';
import { JwtRestGuard } from '../auth/guards/jwt-rest.guard';
import { AppPermissionRestGuard, RequireAppRest } from '../auth/guards/app-permission-rest.guard';

@Controller('assets')
@UseGuards(JwtRestGuard, AppPermissionRestGuard)
@RequireAppRest('WEALTH_TRACKER')
export class AssetsController {
  constructor(private readonly assetsService: AssetsService) {}

  @Get('search')
  search(@Query('q') query: string, @Query('limit') limit?: number) {
    if (!query) {
      return [];
    }
    return this.assetsService.search(query, limit ? parseInt(limit.toString()) : 20);
  }

  @Post()
  create(@Body() createAssetDto: CreateAssetDto) {
    return this.assetsService.create(createAssetDto);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.assetsService.findOne(id);
  }
}
