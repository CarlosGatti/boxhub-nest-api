import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FeedSourceNudgeUpdateManyMutationInput } from './feed-source-nudge-update-many-mutation.input';
import { Type } from 'class-transformer';
import { FeedSourceNudgeWhereInput } from './feed-source-nudge-where.input';

@ArgsType()
export class UpdateManyFeedSourceNudgeArgs {

    @Field(() => FeedSourceNudgeUpdateManyMutationInput, {nullable:false})
    @Type(() => FeedSourceNudgeUpdateManyMutationInput)
    data!: FeedSourceNudgeUpdateManyMutationInput;

    @Field(() => FeedSourceNudgeWhereInput, {nullable:true})
    @Type(() => FeedSourceNudgeWhereInput)
    where?: FeedSourceNudgeWhereInput;
}
