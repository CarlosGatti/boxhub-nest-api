import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LogCommentCreateManyLogInput } from './log-comment-create-many-log.input';
import { Type } from 'class-transformer';

@InputType()
export class LogCommentCreateManyLogInputEnvelope {

    @Field(() => [LogCommentCreateManyLogInput], {nullable:false})
    @Type(() => LogCommentCreateManyLogInput)
    data!: Array<LogCommentCreateManyLogInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
