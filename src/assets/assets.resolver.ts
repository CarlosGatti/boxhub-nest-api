import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { Asset } from '../../@generated/asset/asset.model';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { AssetsService } from './assets.service';
import { CreateAssetInput } from './dto/create-asset.input';

@Resolver(() => Asset)
export class AssetsResolver {
  constructor(private readonly assetsService: AssetsService) {}

  @UseGuards(JwtAuthGuard)
  @Query(() => [Asset], { name: 'assets' })
  async findAll(
    @Args('limit', { type: () => Int, nullable: true }) limit?: number,
    @Args('skip', { type: () => Int, nullable: true }) skip?: number,
  ) {
    return this.assetsService.findAll(limit, skip);
  }

  @UseGuards(JwtAuthGuard)
  @Query(() => [Asset], { name: 'searchAssets' })
  async searchAssets(
    @Args('query') query: string,
    @Args('limit', { type: () => Int, nullable: true, defaultValue: 20 })
    limit?: number,
  ) {
    return this.assetsService.search(query, limit);
  }

  @UseGuards(JwtAuthGuard)
  @Query(() => Asset, { name: 'asset', nullable: true })
  async findOne(@Args('id', { type: () => Int }) id: number) {
    return this.assetsService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => Asset)
  async createAsset(@Args('data') data: CreateAssetInput) {
    let metadata = undefined;
    if (data.metadata) {
      try {
        metadata = JSON.parse(data.metadata);
      } catch (e) {
        // Se não for JSON válido, ignora
      }
    }

    return this.assetsService.create({
      type: data.type,
      ticker: data.ticker,
      name: data.name,
      currency: data.currency,
      exchange: data.exchange,
      metadata,
    });
  }
}

