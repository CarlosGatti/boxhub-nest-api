import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class HomeOpsTaskTemplateSlotUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:false})
    templateId!: number;

    @Field(() => String, {nullable:false})
    label!: string;

    @Field(() => String, {nullable:false})
    windowStart!: string;

    @Field(() => String, {nullable:false})
    windowEnd!: string;

    @Field(() => Int, {nullable:false})
    order!: number;
}
