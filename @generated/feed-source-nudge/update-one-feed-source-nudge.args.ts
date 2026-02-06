import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FeedSourceNudgeUpdateInput } from './feed-source-nudge-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { FeedSourceNudgeWhereUniqueInput } from './feed-source-nudge-where-unique.input';

@ArgsType()
export class UpdateOneFeedSourceNudgeArgs {

    @Field(() => FeedSourceNudgeUpdateInput, {nullable:false})
    @Type(() => FeedSourceNudgeUpdateInput)
    data!: FeedSourceNudgeUpdateInput;

    @Field(() => FeedSourceNudgeWhereUniqueInput, {nullable:false})
    @Type(() => FeedSourceNudgeWhereUniqueInput)
    where!: Prisma.AtLeast<FeedSourceNudgeWhereUniqueInput, 'id'>;
}
