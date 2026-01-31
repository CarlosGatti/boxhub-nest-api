import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedItemVisibility } from './feed-item-visibility.enum';

@InputType()
export class EnumFeedItemVisibilityFieldUpdateOperationsInput {

    @Field(() => FeedItemVisibility, {nullable:true})
    set?: keyof typeof FeedItemVisibility;
}
