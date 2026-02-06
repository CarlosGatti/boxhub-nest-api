import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FeedSourceNudgeCreateInput } from './feed-source-nudge-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneFeedSourceNudgeArgs {

    @Field(() => FeedSourceNudgeCreateInput, {nullable:false})
    @Type(() => FeedSourceNudgeCreateInput)
    data!: FeedSourceNudgeCreateInput;
}
