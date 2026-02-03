import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class HomeOpsTaskTemplateSlotCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    templateId!: number;

    @Field(() => Int, {nullable:false})
    label!: number;

    @Field(() => Int, {nullable:false})
    windowStart!: number;

    @Field(() => Int, {nullable:false})
    windowEnd!: number;

    @Field(() => Int, {nullable:false})
    order!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
