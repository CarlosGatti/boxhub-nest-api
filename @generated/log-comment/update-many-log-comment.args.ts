import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LogCommentUpdateManyMutationInput } from './log-comment-update-many-mutation.input';
import { Type } from 'class-transformer';
import { LogCommentWhereInput } from './log-comment-where.input';

@ArgsType()
export class UpdateManyLogCommentArgs {

    @Field(() => LogCommentUpdateManyMutationInput, {nullable:false})
    @Type(() => LogCommentUpdateManyMutationInput)
    data!: LogCommentUpdateManyMutationInput;

    @Field(() => LogCommentWhereInput, {nullable:true})
    @Type(() => LogCommentWhereInput)
    where?: LogCommentWhereInput;
}
