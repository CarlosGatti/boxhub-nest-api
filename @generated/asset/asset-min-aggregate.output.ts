import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { AssetType } from '../prisma/asset-type.enum';

@ObjectType()
export class AssetMinAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => AssetType, {nullable:true})
    type?: keyof typeof AssetType;

    @Field(() => String, {nullable:true})
    ticker?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    currency?: string;

    @Field(() => String, {nullable:true})
    exchange?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
