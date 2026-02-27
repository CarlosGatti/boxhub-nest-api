import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { BucketShareType } from '../prisma/bucket-share-type.enum';

@ObjectType()
export class BucketShareMinAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    userId?: number;

    @Field(() => String, {nullable:true})
    token?: string;

    @Field(() => BucketShareType, {nullable:true})
    type?: keyof typeof BucketShareType;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
