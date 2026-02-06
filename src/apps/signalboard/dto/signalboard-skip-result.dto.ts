import { Field, ObjectType } from '@nestjs/graphql';
import { FeedItemState } from '@generated/feed-item-state/feed-item-state.model';
import { FeedSourcePreference } from '@generated/feed-source-preference/feed-source-preference.model';

@ObjectType()
export class SignalboardSkipResult {
  @Field(() => FeedItemState)
  state: FeedItemState;

  @Field(() => FeedSourcePreference)
  sourcePreference: FeedSourcePreference;

  @Field(() => Boolean)
  needsSourceAttention: boolean;
}
