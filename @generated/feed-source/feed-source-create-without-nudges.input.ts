import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedSourceType } from '../prisma/feed-source-type.enum';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { FeedCollectionCreateNestedOneWithoutSourcesInput } from '../feed-collection/feed-collection-create-nested-one-without-sources.input';
import { FeedItemCreateNestedManyWithoutSourceInput } from '../feed-item/feed-item-create-nested-many-without-source.input';
import { FeedEventCreateNestedManyWithoutSourceInput } from '../feed-event/feed-event-create-nested-many-without-source.input';
import { FeedSourcePreferenceCreateNestedManyWithoutSourceInput } from '../feed-source-preference/feed-source-preference-create-nested-many-without-source.input';

@InputType()
export class FeedSourceCreateWithoutNudgesInput {

    @Field(() => FeedSourceType, {nullable:false})
    type!: keyof typeof FeedSourceType;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    url!: string;

    @Field(() => Boolean, {nullable:true})
    isActive?: boolean;

    @Field(() => Boolean, {nullable:true})
    includeShorts?: boolean;

    @Field(() => Int, {nullable:true})
    fetchEveryMin?: number;

    @Field(() => Date, {nullable:true})
    lastFetchedAt?: Date | string;

    @Field(() => Int, {nullable:true})
    failureCount?: number;

    @Field(() => GraphQLJSON, {nullable:true})
    metadata?: any;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => FeedCollectionCreateNestedOneWithoutSourcesInput, {nullable:false})
    collection!: FeedCollectionCreateNestedOneWithoutSourcesInput;

    @Field(() => FeedItemCreateNestedManyWithoutSourceInput, {nullable:true})
    items?: FeedItemCreateNestedManyWithoutSourceInput;

    @Field(() => FeedEventCreateNestedManyWithoutSourceInput, {nullable:true})
    events?: FeedEventCreateNestedManyWithoutSourceInput;

    @Field(() => FeedSourcePreferenceCreateNestedManyWithoutSourceInput, {nullable:true})
    preferences?: FeedSourcePreferenceCreateNestedManyWithoutSourceInput;
}
