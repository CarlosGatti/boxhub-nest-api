import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { HoldingWhereUniqueInput } from './holding-where-unique.input';
import { Type } from 'class-transformer';
import { HoldingUpdateWithoutPortfolioInput } from './holding-update-without-portfolio.input';

@InputType()
export class HoldingUpdateWithWhereUniqueWithoutPortfolioInput {

    @Field(() => HoldingWhereUniqueInput, {nullable:false})
    @Type(() => HoldingWhereUniqueInput)
    where!: Prisma.AtLeast<HoldingWhereUniqueInput, 'id'>;

    @Field(() => HoldingUpdateWithoutPortfolioInput, {nullable:false})
    @Type(() => HoldingUpdateWithoutPortfolioInput)
    data!: HoldingUpdateWithoutPortfolioInput;
}
