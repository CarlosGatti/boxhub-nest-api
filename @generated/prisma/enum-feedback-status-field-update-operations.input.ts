import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedbackStatus } from './feedback-status.enum';

@InputType()
export class EnumFeedbackStatusFieldUpdateOperationsInput {

    @Field(() => FeedbackStatus, {nullable:true})
    set?: keyof typeof FeedbackStatus;
}
