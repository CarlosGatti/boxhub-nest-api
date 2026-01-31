import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedItemSaveStatus } from './feed-item-save-status.enum';

@InputType()
export class EnumFeedItemSaveStatusFieldUpdateOperationsInput {

    @Field(() => FeedItemSaveStatus, {nullable:true})
    set?: keyof typeof FeedItemSaveStatus;
}
