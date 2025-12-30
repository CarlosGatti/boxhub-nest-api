import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PortfolioWhereUniqueInput } from './portfolio-where-unique.input';
import { Type } from 'class-transformer';
import { PortfolioCreateWithoutHoldingsInput } from './portfolio-create-without-holdings.input';

@InputType()
export class PortfolioCreateOrConnectWithoutHoldingsInput {

    @Field(() => PortfolioWhereUniqueInput, {nullable:false})
    @Type(() => PortfolioWhereUniqueInput)
    where!: Prisma.AtLeast<PortfolioWhereUniqueInput, 'id'>;

    @Field(() => PortfolioCreateWithoutHoldingsInput, {nullable:false})
    @Type(() => PortfolioCreateWithoutHoldingsInput)
    create!: PortfolioCreateWithoutHoldingsInput;
}
