import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class AssetCount {

    @Field(() => Int, {nullable:false})
    holdings?: number;

    @Field(() => Int, {nullable:false})
    pricePoints?: number;

    @Field(() => Int, {nullable:false})
    transactions?: number;
}
