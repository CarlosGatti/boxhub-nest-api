import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedIntakeAnswerWhereInput } from './defined-intake-answer-where.input';

@InputType()
export class DefinedIntakeAnswerListRelationFilter {

    @Field(() => DefinedIntakeAnswerWhereInput, {nullable:true})
    every?: DefinedIntakeAnswerWhereInput;

    @Field(() => DefinedIntakeAnswerWhereInput, {nullable:true})
    some?: DefinedIntakeAnswerWhereInput;

    @Field(() => DefinedIntakeAnswerWhereInput, {nullable:true})
    none?: DefinedIntakeAnswerWhereInput;
}
