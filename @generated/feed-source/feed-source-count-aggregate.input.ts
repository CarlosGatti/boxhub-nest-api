import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class FeedSourceCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    collectionId?: true;

    @Field(() => Boolean, {nullable:true})
    type?: true;

    @Field(() => Boolean, {nullable:true})
    name?: true;

    @Field(() => Boolean, {nullable:true})
    url?: true;

    @Field(() => Boolean, {nullable:true})
    isActive?: true;

    @Field(() => Boolean, {nullable:true})
    includeShorts?: true;

    @Field(() => Boolean, {nullable:true})
    fetchEveryMin?: true;

    @Field(() => Boolean, {nullable:true})
    lastFetchedAt?: true;

    @Field(() => Boolean, {nullable:true})
    failureCount?: true;

    @Field(() => Boolean, {nullable:true})
    metadata?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
