import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import { AssetCreateNestedOneWithoutHoldingsInput } from '../asset/asset-create-nested-one-without-holdings.input';

@InputType()
export class HoldingCreateWithoutPortfolioInput {

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

    @Field(() => AssetCreateNestedOneWithoutHoldingsInput, {nullable:false})
    @Type(() => AssetCreateNestedOneWithoutHoldingsInput)
    asset!: AssetCreateNestedOneWithoutHoldingsInput;
}
