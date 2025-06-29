import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LogCommentWhereInput } from './log-comment-where.input';

@InputType()
export class LogCommentListRelationFilter {

    @Field(() => LogCommentWhereInput, {nullable:true})
    every?: LogCommentWhereInput;

    @Field(() => LogCommentWhereInput, {nullable:true})
    some?: LogCommentWhereInput;

    @Field(() => LogCommentWhereInput, {nullable:true})
    none?: LogCommentWhereInput;
}
