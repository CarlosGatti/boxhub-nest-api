import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FeedEventCreateInput } from './feed-event-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneFeedEventArgs {

    @Field(() => FeedEventCreateInput, {nullable:false})
    @Type(() => FeedEventCreateInput)
    data!: FeedEventCreateInput;
}
