import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LogCommentCreateManyUserInput } from './log-comment-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class LogCommentCreateManyUserInputEnvelope {

    @Field(() => [LogCommentCreateManyUserInput], {nullable:false})
    @Type(() => LogCommentCreateManyUserInput)
    data!: Array<LogCommentCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
