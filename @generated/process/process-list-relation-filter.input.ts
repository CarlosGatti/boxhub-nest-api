import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProcessWhereInput } from './process-where.input';

@InputType()
export class ProcessListRelationFilter {

    @Field(() => ProcessWhereInput, {nullable:true})
    every?: ProcessWhereInput;

    @Field(() => ProcessWhereInput, {nullable:true})
    some?: ProcessWhereInput;

    @Field(() => ProcessWhereInput, {nullable:true})
    none?: ProcessWhereInput;
}
