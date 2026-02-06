import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedSourceWhereInput } from './feed-source-where.input';
import { Type } from 'class-transformer';
import { FeedSourceUpdateWithoutPreferencesInput } from './feed-source-update-without-preferences.input';

@InputType()
export class FeedSourceUpdateToOneWithWhereWithoutPreferencesInput {

    @Field(() => FeedSourceWhereInput, {nullable:true})
    @Type(() => FeedSourceWhereInput)
    where?: FeedSourceWhereInput;

    @Field(() => FeedSourceUpdateWithoutPreferencesInput, {nullable:false})
    @Type(() => FeedSourceUpdateWithoutPreferencesInput)
    data!: FeedSourceUpdateWithoutPreferencesInput;
}
