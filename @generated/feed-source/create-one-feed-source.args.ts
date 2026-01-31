import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FeedSourceCreateInput } from './feed-source-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneFeedSourceArgs {

    @Field(() => FeedSourceCreateInput, {nullable:false})
    @Type(() => FeedSourceCreateInput)
    data!: FeedSourceCreateInput;
}
