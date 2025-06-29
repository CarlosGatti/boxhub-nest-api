import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LogCommentCreateManyInput } from './log-comment-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyLogCommentArgs {

    @Field(() => [LogCommentCreateManyInput], {nullable:false})
    @Type(() => LogCommentCreateManyInput)
    data!: Array<LogCommentCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
