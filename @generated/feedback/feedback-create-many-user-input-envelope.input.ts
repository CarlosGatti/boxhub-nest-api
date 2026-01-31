import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedbackCreateManyUserInput } from './feedback-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class FeedbackCreateManyUserInputEnvelope {

    @Field(() => [FeedbackCreateManyUserInput], {nullable:false})
    @Type(() => FeedbackCreateManyUserInput)
    data!: Array<FeedbackCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
