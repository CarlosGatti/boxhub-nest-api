import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { Portfolio } from '../../@generated/portfolio/portfolio.model';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CurrentUser } from '../user/current-user.decorator';
import { User } from '../../@generated/user/user.model';
import { PortfoliosService } from './portfolios.service';
import { CreatePortfolioInput } from './dto/create-portfolio.input';
import { UpdatePortfolioInput } from './dto/update-portfolio.input';

@Resolver(() => Portfolio)
export class PortfoliosResolver {
  constructor(private readonly portfoliosService: PortfoliosService) {}

  @UseGuards(JwtAuthGuard)
  @Query(() => [Portfolio], { name: 'portfolios' })
  async findAll(@CurrentUser() user: User) {
    return this.portfoliosService.findAll(user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Query(() => Portfolio, { name: 'portfolio', nullable: true })
  async findOne(
    @Args('id', { type: () => Int }) id: number,
    @CurrentUser() user: User,
  ) {
    return this.portfoliosService.findOne(id, user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => Portfolio)
  async createPortfolio(
    @Args('data') data: CreatePortfolioInput,
    @CurrentUser() user: User,
  ) {
    return this.portfoliosService.create(user.id, {
      name: data.name,
      baseCurrency: data.baseCurrency,
    });
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => Portfolio)
  async updatePortfolio(
    @Args('id', { type: () => Int }) id: number,
    @Args('data') data: UpdatePortfolioInput,
    @CurrentUser() user: User,
  ) {
    return this.portfoliosService.update(id, user.id, {
      name: data.name,
      baseCurrency: data.baseCurrency,
    });
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => Boolean)
  async deletePortfolio(
    @Args('id', { type: () => Int }) id: number,
    @CurrentUser() user: User,
  ) {
    await this.portfoliosService.remove(id, user.id);
    return true;
  }
}

