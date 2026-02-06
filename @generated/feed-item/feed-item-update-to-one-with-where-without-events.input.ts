import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedItemWhereInput } from './feed-item-where.input';
import { Type } from 'class-transformer';
import { FeedItemUpdateWithoutEventsInput } from './feed-item-update-without-events.input';

@InputType()
export class FeedItemUpdateToOneWithWhereWithoutEventsInput {

    @Field(() => FeedItemWhereInput, {nullable:true})
    @Type(() => FeedItemWhereInput)
    where?: FeedItemWhereInput;

    @Field(() => FeedItemUpdateWithoutEventsInput, {nullable:false})
    @Type(() => FeedItemUpdateWithoutEventsInput)
    data!: FeedItemUpdateWithoutEventsInput;
}
