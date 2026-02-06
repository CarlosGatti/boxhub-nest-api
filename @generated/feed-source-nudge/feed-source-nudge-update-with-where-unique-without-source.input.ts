import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FeedSourceNudgeWhereUniqueInput } from './feed-source-nudge-where-unique.input';
import { Type } from 'class-transformer';
import { FeedSourceNudgeUpdateWithoutSourceInput } from './feed-source-nudge-update-without-source.input';

@InputType()
export class FeedSourceNudgeUpdateWithWhereUniqueWithoutSourceInput {

    @Field(() => FeedSourceNudgeWhereUniqueInput, {nullable:false})
    @Type(() => FeedSourceNudgeWhereUniqueInput)
    where!: Prisma.AtLeast<FeedSourceNudgeWhereUniqueInput, 'id'>;

    @Field(() => FeedSourceNudgeUpdateWithoutSourceInput, {nullable:false})
    @Type(() => FeedSourceNudgeUpdateWithoutSourceInput)
    data!: FeedSourceNudgeUpdateWithoutSourceInput;
}
