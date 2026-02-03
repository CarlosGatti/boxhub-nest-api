import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeOpsTaskInstanceWhereInput } from './home-ops-task-instance-where.input';

@InputType()
export class HomeOpsTaskInstanceListRelationFilter {

    @Field(() => HomeOpsTaskInstanceWhereInput, {nullable:true})
    every?: HomeOpsTaskInstanceWhereInput;

    @Field(() => HomeOpsTaskInstanceWhereInput, {nullable:true})
    some?: HomeOpsTaskInstanceWhereInput;

    @Field(() => HomeOpsTaskInstanceWhereInput, {nullable:true})
    none?: HomeOpsTaskInstanceWhereInput;
}
