import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HomeOpsTaskTemplateCreateNestedOneWithoutSlotsInput } from '../home-ops-task-template/home-ops-task-template-create-nested-one-without-slots.input';

@InputType()
export class HomeOpsTaskTemplateSlotCreateInput {

    @Field(() => String, {nullable:false})
    label!: string;

    @Field(() => String, {nullable:false})
    windowStart!: string;

    @Field(() => String, {nullable:false})
    windowEnd!: string;

    @Field(() => Int, {nullable:false})
    order!: number;

    @Field(() => HomeOpsTaskTemplateCreateNestedOneWithoutSlotsInput, {nullable:false})
    template!: HomeOpsTaskTemplateCreateNestedOneWithoutSlotsInput;
}
