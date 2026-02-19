import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { BucketVisionItemType } from '../prisma/bucket-vision-item-type.enum';
import { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class BucketVisionItemUncheckedCreateWithoutBoardInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => BucketVisionItemType, {nullable:false})
    type!: keyof typeof BucketVisionItemType;

    @Field(() => String, {nullable:true})
    text?: string;

    @Field(() => String, {nullable:true})
    url?: string;

    @Field(() => String, {nullable:true})
    color?: string;

    @Field(() => GraphQLJSON, {nullable:true})
    metadata?: any;

    @Field(() => Int, {nullable:true})
    order?: number;

    @Field(() => GraphQLJSON, {nullable:true})
    layout?: any;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
