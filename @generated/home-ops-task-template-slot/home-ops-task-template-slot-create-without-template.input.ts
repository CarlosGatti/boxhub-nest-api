import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class HomeOpsTaskTemplateSlotCreateWithoutTemplateInput {

    @Field(() => String, {nullable:false})
    label!: string;

    @Field(() => String, {nullable:false})
    windowStart!: string;

    @Field(() => String, {nullable:false})
    windowEnd!: string;

    @Field(() => Int, {nullable:false})
    order!: number;
}
