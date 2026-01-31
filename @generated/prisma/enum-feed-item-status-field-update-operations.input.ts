import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedItemStatus } from './feed-item-status.enum';

@InputType()
export class EnumFeedItemStatusFieldUpdateOperationsInput {

    @Field(() => FeedItemStatus, {nullable:true})
    set?: keyof typeof FeedItemStatus;
}
