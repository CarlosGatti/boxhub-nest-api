import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedItemType } from './feed-item-type.enum';

@InputType()
export class EnumFeedItemTypeFieldUpdateOperationsInput {

    @Field(() => FeedItemType, {nullable:true})
    set?: keyof typeof FeedItemType;
}
