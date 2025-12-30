import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { HoldingWhereUniqueInput } from './holding-where-unique.input';
import { Type } from 'class-transformer';
import { HoldingCreateWithoutPortfolioInput } from './holding-create-without-portfolio.input';

@InputType()
export class HoldingCreateOrConnectWithoutPortfolioInput {

    @Field(() => HoldingWhereUniqueInput, {nullable:false})
    @Type(() => HoldingWhereUniqueInput)
    where!: Prisma.AtLeast<HoldingWhereUniqueInput, 'id'>;

    @Field(() => HoldingCreateWithoutPortfolioInput, {nullable:false})
    @Type(() => HoldingCreateWithoutPortfolioInput)
    create!: HoldingCreateWithoutPortfolioInput;
}
