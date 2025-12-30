import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PortfolioWhereUniqueInput } from './portfolio-where-unique.input';
import { Type } from 'class-transformer';
import { PortfolioCreateInput } from './portfolio-create.input';
import { PortfolioUpdateInput } from './portfolio-update.input';

@ArgsType()
export class UpsertOnePortfolioArgs {

    @Field(() => PortfolioWhereUniqueInput, {nullable:false})
    @Type(() => PortfolioWhereUniqueInput)
    where!: Prisma.AtLeast<PortfolioWhereUniqueInput, 'id'>;

    @Field(() => PortfolioCreateInput, {nullable:false})
    @Type(() => PortfolioCreateInput)
    create!: PortfolioCreateInput;

    @Field(() => PortfolioUpdateInput, {nullable:false})
    @Type(() => PortfolioUpdateInput)
    update!: PortfolioUpdateInput;
}
