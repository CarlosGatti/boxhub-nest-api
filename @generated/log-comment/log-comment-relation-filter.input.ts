import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LogCommentWhereInput } from './log-comment-where.input';

@InputType()
export class LogCommentRelationFilter {

    @Field(() => LogCommentWhereInput, {nullable:true})
    is?: LogCommentWhereInput;

    @Field(() => LogCommentWhereInput, {nullable:true})
    isNot?: LogCommentWhereInput;
}
