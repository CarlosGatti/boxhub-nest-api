import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LogCommentScalarWhereInput } from './log-comment-scalar-where.input';
import { Type } from 'class-transformer';
import { LogCommentUpdateManyMutationInput } from './log-comment-update-many-mutation.input';

@InputType()
export class LogCommentUpdateManyWithWhereWithoutUserInput {

    @Field(() => LogCommentScalarWhereInput, {nullable:false})
    @Type(() => LogCommentScalarWhereInput)
    where!: LogCommentScalarWhereInput;

    @Field(() => LogCommentUpdateManyMutationInput, {nullable:false})
    @Type(() => LogCommentUpdateManyMutationInput)
    data!: LogCommentUpdateManyMutationInput;
}
