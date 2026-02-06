import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FeedSourceNudgeCreateManyInput } from './feed-source-nudge-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyFeedSourceNudgeArgs {

    @Field(() => [FeedSourceNudgeCreateManyInput], {nullable:false})
    @Type(() => FeedSourceNudgeCreateManyInput)
    data!: Array<FeedSourceNudgeCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
