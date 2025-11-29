import { Args, Mutation, Query, Resolver, Int } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { RatingsService } from './ratings.service';
import { CreateRatingInput } from './dto/create-rating.input';
import { Rating } from '../../@generated/rating/rating.model';
import { SellerRatingSummary } from './dto/rating.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CurrentUser } from '../user/current-user.decorator';
import { User } from '../../@generated/user/user.model';

@Resolver(() => Rating)
export class RatingsResolver {
  constructor(private readonly ratingsService: RatingsService) {}

  @UseGuards(JwtAuthGuard)
  @Mutation(() => Rating)
  async createRating(
    @Args('input') input: CreateRatingInput,
    @CurrentUser() user: User,
  ): Promise<Rating> {
    return this.ratingsService.create(input, user as any) as any;
  }

  @Query(() => SellerRatingSummary)
  async sellerRatings(@Args('sellerId', { type: () => Int }) sellerId: number): Promise<SellerRatingSummary> {
    return this.ratingsService.getSellerRatings(sellerId) as any;
  }
}

