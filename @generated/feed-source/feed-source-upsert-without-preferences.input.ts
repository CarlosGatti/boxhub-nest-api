import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedSourceUpdateWithoutPreferencesInput } from './feed-source-update-without-preferences.input';
import { Type } from 'class-transformer';
import { FeedSourceCreateWithoutPreferencesInput } from './feed-source-create-without-preferences.input';
import { FeedSourceWhereInput } from './feed-source-where.input';

@InputType()
export class FeedSourceUpsertWithoutPreferencesInput {

    @Field(() => FeedSourceUpdateWithoutPreferencesInput, {nullable:false})
    @Type(() => FeedSourceUpdateWithoutPreferencesInput)
    update!: FeedSourceUpdateWithoutPreferencesInput;

    @Field(() => FeedSourceCreateWithoutPreferencesInput, {nullable:false})
    @Type(() => FeedSourceCreateWithoutPreferencesInput)
    create!: FeedSourceCreateWithoutPreferencesInput;

    @Field(() => FeedSourceWhereInput, {nullable:true})
    @Type(() => FeedSourceWhereInput)
    where?: FeedSourceWhereInput;
}
