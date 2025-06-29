import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LogCommentCreateInput } from './log-comment-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneLogCommentArgs {

    @Field(() => LogCommentCreateInput, {nullable:false})
    @Type(() => LogCommentCreateInput)
    data!: LogCommentCreateInput;
}
