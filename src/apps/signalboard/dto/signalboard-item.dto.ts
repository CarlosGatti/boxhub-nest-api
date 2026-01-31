import { Field, ObjectType } from '@nestjs/graphql';
import { FeedItem } from '../../../../@generated/feed-item/feed-item.model';
import { FeedItemState } from '../../../../@generated/feed-item-state/feed-item-state.model';

@ObjectType()
export class SignalboardItem {
  @Field(() => FeedItem)
  item: FeedItem;

  @Field(() => FeedItemState, { nullable: true })
  state?: FeedItemState | null;
}
