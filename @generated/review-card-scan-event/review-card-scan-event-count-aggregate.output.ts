import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ReviewCardScanEventCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    projectId!: number;

    @Field(() => Int, {nullable:false})
    ipHash!: number;

    @Field(() => Int, {nullable:false})
    userAgent!: number;

    @Field(() => Int, {nullable:false})
    referer!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
