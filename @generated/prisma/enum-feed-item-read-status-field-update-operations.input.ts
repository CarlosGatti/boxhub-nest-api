import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedItemReadStatus } from './feed-item-read-status.enum';

@InputType()
export class EnumFeedItemReadStatusFieldUpdateOperationsInput {

    @Field(() => FeedItemReadStatus, {nullable:true})
    set?: keyof typeof FeedItemReadStatus;
}
