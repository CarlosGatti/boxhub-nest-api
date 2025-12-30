import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import { PortfolioCreateNestedOneWithoutHoldingsInput } from '../portfolio/portfolio-create-nested-one-without-holdings.input';

@InputType()
export class HoldingCreateWithoutAssetInput {

    @Field(() => GraphQLDecimal, {nullable:false})
    @Type(() => Object)
    @Transform(transformToDecimal)
    quantity!: Decimal;

    @Field(() => GraphQLDecimal, {nullable:false})
    @Type(() => Object)
    @Transform(transformToDecimal)
    averageCost!: Decimal;

    @Field(() => String, {nullable:true})
    notes?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => PortfolioCreateNestedOneWithoutHoldingsInput, {nullable:false})
    @Type(() => PortfolioCreateNestedOneWithoutHoldingsInput)
    portfolio!: PortfolioCreateNestedOneWithoutHoldingsInput;
}
