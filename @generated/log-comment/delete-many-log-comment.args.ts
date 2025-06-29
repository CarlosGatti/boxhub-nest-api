import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LogCommentWhereInput } from './log-comment-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyLogCommentArgs {

    @Field(() => LogCommentWhereInput, {nullable:true})
    @Type(() => LogCommentWhereInput)
    where?: LogCommentWhereInput;
}
