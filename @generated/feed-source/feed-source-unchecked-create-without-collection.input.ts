import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { FeedSourceType } from '../prisma/feed-source-type.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { FeedItemUncheckedCreateNestedManyWithoutSourceInput } from '../feed-item/feed-item-unchecked-create-nested-many-without-source.input';
import { FeedEventUncheckedCreateNestedManyWithoutSourceInput } from '../feed-event/feed-event-unchecked-create-nested-many-without-source.input';
import { FeedSourceNudgeUncheckedCreateNestedManyWithoutSourceInput } from '../feed-source-nudge/feed-source-nudge-unchecked-create-nested-many-without-source.input';
import { FeedSourcePreferenceUncheckedCreateNestedManyWithoutSourceInput } from '../feed-source-preference/feed-source-preference-unchecked-create-nested-many-without-source.input';

@InputType()
export class FeedSourceUncheckedCreateWithoutCollectionInput {

    @Field(() => Int, {nullable:true})
    id?: number;

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

    @Field(() => FeedItemUncheckedCreateNestedManyWithoutSourceInput, {nullable:true})
    items?: FeedItemUncheckedCreateNestedManyWithoutSourceInput;

    @Field(() => FeedEventUncheckedCreateNestedManyWithoutSourceInput, {nullable:true})
    events?: FeedEventUncheckedCreateNestedManyWithoutSourceInput;

    @Field(() => FeedSourceNudgeUncheckedCreateNestedManyWithoutSourceInput, {nullable:true})
    nudges?: FeedSourceNudgeUncheckedCreateNestedManyWithoutSourceInput;

    @Field(() => FeedSourcePreferenceUncheckedCreateNestedManyWithoutSourceInput, {nullable:true})
    preferences?: FeedSourcePreferenceUncheckedCreateNestedManyWithoutSourceInput;
}
