import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeOpsTaskTemplateSlotWhereInput } from './home-ops-task-template-slot-where.input';

@InputType()
export class HomeOpsTaskTemplateSlotListRelationFilter {

    @Field(() => HomeOpsTaskTemplateSlotWhereInput, {nullable:true})
    every?: HomeOpsTaskTemplateSlotWhereInput;

    @Field(() => HomeOpsTaskTemplateSlotWhereInput, {nullable:true})
    some?: HomeOpsTaskTemplateSlotWhereInput;

    @Field(() => HomeOpsTaskTemplateSlotWhereInput, {nullable:true})
    none?: HomeOpsTaskTemplateSlotWhereInput;
}
