import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PortfolioCreateWithoutHoldingsInput } from './portfolio-create-without-holdings.input';
import { Type } from 'class-transformer';
import { PortfolioCreateOrConnectWithoutHoldingsInput } from './portfolio-create-or-connect-without-holdings.input';
import { Prisma } from '@prisma/client';
import { PortfolioWhereUniqueInput } from './portfolio-where-unique.input';

@InputType()
export class PortfolioCreateNestedOneWithoutHoldingsInput {

    @Field(() => PortfolioCreateWithoutHoldingsInput, {nullable:true})
    @Type(() => PortfolioCreateWithoutHoldingsInput)
    create?: PortfolioCreateWithoutHoldingsInput;

    @Field(() => PortfolioCreateOrConnectWithoutHoldingsInput, {nullable:true})
    @Type(() => PortfolioCreateOrConnectWithoutHoldingsInput)
    connectOrCreate?: PortfolioCreateOrConnectWithoutHoldingsInput;

    @Field(() => PortfolioWhereUniqueInput, {nullable:true})
    @Type(() => PortfolioWhereUniqueInput)
    connect?: Prisma.AtLeast<PortfolioWhereUniqueInput, 'id'>;
}
