import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FeedItemStateCreateInput } from './feed-item-state-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneFeedItemStateArgs {

    @Field(() => FeedItemStateCreateInput, {nullable:false})
    @Type(() => FeedItemStateCreateInput)
    data!: FeedItemStateCreateInput;
}
