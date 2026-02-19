import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { BucketVisionItemType } from '../prisma/bucket-vision-item-type.enum';

@ObjectType()
export class BucketVisionItemMaxAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    boardId?: number;

    @Field(() => BucketVisionItemType, {nullable:true})
    type?: keyof typeof BucketVisionItemType;

    @Field(() => String, {nullable:true})
    text?: string;

    @Field(() => String, {nullable:true})
    url?: string;

    @Field(() => String, {nullable:true})
    color?: string;

    @Field(() => Int, {nullable:true})
    order?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
