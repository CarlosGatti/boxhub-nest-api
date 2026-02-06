import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedSourceWhereInput } from './feed-source-where.input';
import { Type } from 'class-transformer';
import { FeedSourceUpdateWithoutEventsInput } from './feed-source-update-without-events.input';

@InputType()
export class FeedSourceUpdateToOneWithWhereWithoutEventsInput {

    @Field(() => FeedSourceWhereInput, {nullable:true})
    @Type(() => FeedSourceWhereInput)
    where?: FeedSourceWhereInput;

    @Field(() => FeedSourceUpdateWithoutEventsInput, {nullable:false})
    @Type(() => FeedSourceUpdateWithoutEventsInput)
    data!: FeedSourceUpdateWithoutEventsInput;
}
