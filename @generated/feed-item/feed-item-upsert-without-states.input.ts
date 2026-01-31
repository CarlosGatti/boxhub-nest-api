import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedItemUpdateWithoutStatesInput } from './feed-item-update-without-states.input';
import { Type } from 'class-transformer';
import { FeedItemCreateWithoutStatesInput } from './feed-item-create-without-states.input';
import { FeedItemWhereInput } from './feed-item-where.input';

@InputType()
export class FeedItemUpsertWithoutStatesInput {

    @Field(() => FeedItemUpdateWithoutStatesInput, {nullable:false})
    @Type(() => FeedItemUpdateWithoutStatesInput)
    update!: FeedItemUpdateWithoutStatesInput;

    @Field(() => FeedItemCreateWithoutStatesInput, {nullable:false})
    @Type(() => FeedItemCreateWithoutStatesInput)
    create!: FeedItemCreateWithoutStatesInput;

    @Field(() => FeedItemWhereInput, {nullable:true})
    @Type(() => FeedItemWhereInput)
    where?: FeedItemWhereInput;
}
