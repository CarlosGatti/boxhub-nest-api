import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FeedItemCreateInput } from './feed-item-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneFeedItemArgs {

    @Field(() => FeedItemCreateInput, {nullable:false})
    @Type(() => FeedItemCreateInput)
    data!: FeedItemCreateInput;
}
