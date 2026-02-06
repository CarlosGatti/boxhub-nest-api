import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/core/auth/guards/jwt-auth.guard';
import { PricingService } from './pricing.service';
import { Field, ObjectType, Float } from '@nestjs/graphql';
import { PricePoint } from '@generated/price-point/price-point.model';

@ObjectType()
export class Quote {
  @Field(() => Float)
  price: number;

  @Field(() => String)
  currency: string;

  @Field(() => String)
  asOf: string;

  @Field(() => String)
  source: string;

  @Field(() => String, { nullable: true })
  cachedAt?: string;
}

@Resolver()
export class PricingResolver {
  constructor(private readonly pricingService: PricingService) {}

  @UseGuards(JwtAuthGuard)
  @Query(() => Quote, { name: 'quote' })
  async getQuote(@Args('ticker') ticker: string) {
    const quote = await this.pricingService.getQuote(ticker);
    return {
      price: parseFloat(quote.price.toString()),
      currency: quote.currency,
      asOf: quote.asOf.toISOString(),
      source: quote.source,
      cachedAt: quote.cachedAt?.toISOString(),
    };
  }

  @UseGuards(JwtAuthGuard)
  @Query(() => [PricePoint], { name: 'assetPrices' })
  async getAssetPrices(
    @Args('assetId', { type: () => Int }) assetId: number,
    @Args('range', { nullable: true }) range?: '1D' | '1M' | '1Y',
  ) {
    return this.pricingService.getAssetPrices(assetId, range);
  }
}

