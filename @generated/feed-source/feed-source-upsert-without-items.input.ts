import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedSourceUpdateWithoutItemsInput } from './feed-source-update-without-items.input';
import { Type } from 'class-transformer';
import { FeedSourceCreateWithoutItemsInput } from './feed-source-create-without-items.input';
import { FeedSourceWhereInput } from './feed-source-where.input';

@InputType()
export class FeedSourceUpsertWithoutItemsInput {

    @Field(() => FeedSourceUpdateWithoutItemsInput, {nullable:false})
    @Type(() => FeedSourceUpdateWithoutItemsInput)
    update!: FeedSourceUpdateWithoutItemsInput;

    @Field(() => FeedSourceCreateWithoutItemsInput, {nullable:false})
    @Type(() => FeedSourceCreateWithoutItemsInput)
    create!: FeedSourceCreateWithoutItemsInput;

    @Field(() => FeedSourceWhereInput, {nullable:true})
    @Type(() => FeedSourceWhereInput)
    where?: FeedSourceWhereInput;
}
