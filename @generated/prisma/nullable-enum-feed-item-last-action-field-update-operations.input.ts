import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedItemLastAction } from './feed-item-last-action.enum';

@InputType()
export class NullableEnumFeedItemLastActionFieldUpdateOperationsInput {

    @Field(() => FeedItemLastAction, {nullable:true})
    set?: keyof typeof FeedItemLastAction;
}
