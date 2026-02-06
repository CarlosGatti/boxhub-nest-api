import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { FeedSourceCreateNestedOneWithoutPreferencesInput } from '../feed-source/feed-source-create-nested-one-without-preferences.input';

@InputType()
export class FeedSourcePreferenceCreateWithoutUserInput {

    @Field(() => Boolean, {nullable:true})
    notifyOnNew?: boolean;

    @Field(() => Boolean, {nullable:true})
    isMuted?: boolean;

    @Field(() => Date, {nullable:true})
    mutedUntil?: Date | string;

    @Field(() => Int, {nullable:true})
    consecutiveSkips?: number;

    @Field(() => Date, {nullable:true})
    lastInteractedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => FeedSourceCreateNestedOneWithoutPreferencesInput, {nullable:false})
    source!: FeedSourceCreateNestedOneWithoutPreferencesInput;
}
