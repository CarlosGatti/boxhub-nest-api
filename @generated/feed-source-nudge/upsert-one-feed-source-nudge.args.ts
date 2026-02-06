import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FeedSourceNudgeWhereUniqueInput } from './feed-source-nudge-where-unique.input';
import { Type } from 'class-transformer';
import { FeedSourceNudgeCreateInput } from './feed-source-nudge-create.input';
import { FeedSourceNudgeUpdateInput } from './feed-source-nudge-update.input';

@ArgsType()
export class UpsertOneFeedSourceNudgeArgs {

    @Field(() => FeedSourceNudgeWhereUniqueInput, {nullable:false})
    @Type(() => FeedSourceNudgeWhereUniqueInput)
    where!: Prisma.AtLeast<FeedSourceNudgeWhereUniqueInput, 'id'>;

    @Field(() => FeedSourceNudgeCreateInput, {nullable:false})
    @Type(() => FeedSourceNudgeCreateInput)
    create!: FeedSourceNudgeCreateInput;

    @Field(() => FeedSourceNudgeUpdateInput, {nullable:false})
    @Type(() => FeedSourceNudgeUpdateInput)
    update!: FeedSourceNudgeUpdateInput;
}
