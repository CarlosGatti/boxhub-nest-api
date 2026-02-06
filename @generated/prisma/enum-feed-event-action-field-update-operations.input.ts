import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedEventAction } from './feed-event-action.enum';

@InputType()
export class EnumFeedEventActionFieldUpdateOperationsInput {

    @Field(() => FeedEventAction, {nullable:true})
    set?: keyof typeof FeedEventAction;
}
