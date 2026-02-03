import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeOpsTaskTemplateWhereInput } from './home-ops-task-template-where.input';

@InputType()
export class HomeOpsTaskTemplateNullableRelationFilter {

    @Field(() => HomeOpsTaskTemplateWhereInput, {nullable:true})
    is?: HomeOpsTaskTemplateWhereInput;

    @Field(() => HomeOpsTaskTemplateWhereInput, {nullable:true})
    isNot?: HomeOpsTaskTemplateWhereInput;
}
