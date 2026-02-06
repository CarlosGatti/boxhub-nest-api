import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FeedSourceNudgeWhereInput } from './feed-source-nudge-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyFeedSourceNudgeArgs {

    @Field(() => FeedSourceNudgeWhereInput, {nullable:true})
    @Type(() => FeedSourceNudgeWhereInput)
    where?: FeedSourceNudgeWhereInput;
}
