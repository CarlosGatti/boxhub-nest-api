import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import { AssetCreateNestedOneWithoutPricePointsInput } from '../asset/asset-create-nested-one-without-price-points.input';

@InputType()
export class PricePointCreateInput {

    @Field(() => GraphQLDecimal, {nullable:false})
    @Type(() => Object)
    @Transform(transformToDecimal)
    price!: Decimal;

    @Field(() => String, {nullable:false})
    currency!: string;

    @Field(() => Date, {nullable:false})
    asOf!: Date | string;

    @Field(() => String, {nullable:false})
    source!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => AssetCreateNestedOneWithoutPricePointsInput, {nullable:false})
    @Type(() => AssetCreateNestedOneWithoutPricePointsInput)
    asset!: AssetCreateNestedOneWithoutPricePointsInput;
}
