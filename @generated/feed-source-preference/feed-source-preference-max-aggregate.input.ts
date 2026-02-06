import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class FeedSourcePreferenceMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    userId?: true;

    @Field(() => Boolean, {nullable:true})
    sourceId?: true;

    @Field(() => Boolean, {nullable:true})
    notifyOnNew?: true;

    @Field(() => Boolean, {nullable:true})
    isMuted?: true;

    @Field(() => Boolean, {nullable:true})
    mutedUntil?: true;

    @Field(() => Boolean, {nullable:true})
    consecutiveSkips?: true;

    @Field(() => Boolean, {nullable:true})
    lastInteractedAt?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}
