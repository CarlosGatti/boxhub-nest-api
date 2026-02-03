import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class HomeOpsTaskTemplateSlotMinAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    templateId?: number;

    @Field(() => String, {nullable:true})
    label?: string;

    @Field(() => String, {nullable:true})
    windowStart?: string;

    @Field(() => String, {nullable:true})
    windowEnd?: string;

    @Field(() => Int, {nullable:true})
    order?: number;
}
