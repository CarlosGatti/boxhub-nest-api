import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeOpsTaskTemplateWhereInput } from './home-ops-task-template-where.input';

@InputType()
export class HomeOpsTaskTemplateListRelationFilter {

    @Field(() => HomeOpsTaskTemplateWhereInput, {nullable:true})
    every?: HomeOpsTaskTemplateWhereInput;

    @Field(() => HomeOpsTaskTemplateWhereInput, {nullable:true})
    some?: HomeOpsTaskTemplateWhereInput;

    @Field(() => HomeOpsTaskTemplateWhereInput, {nullable:true})
    none?: HomeOpsTaskTemplateWhereInput;
}
