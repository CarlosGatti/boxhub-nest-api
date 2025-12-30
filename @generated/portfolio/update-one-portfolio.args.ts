import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PortfolioUpdateInput } from './portfolio-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { PortfolioWhereUniqueInput } from './portfolio-where-unique.input';

@ArgsType()
export class UpdateOnePortfolioArgs {

    @Field(() => PortfolioUpdateInput, {nullable:false})
    @Type(() => PortfolioUpdateInput)
    data!: PortfolioUpdateInput;

    @Field(() => PortfolioWhereUniqueInput, {nullable:false})
    @Type(() => PortfolioWhereUniqueInput)
    where!: Prisma.AtLeast<PortfolioWhereUniqueInput, 'id'>;
}
