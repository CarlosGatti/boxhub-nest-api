import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FeedSourceNudgeWhereUniqueInput } from './feed-source-nudge-where-unique.input';
import { Type } from 'class-transformer';
import { FeedSourceNudgeCreateWithoutSourceInput } from './feed-source-nudge-create-without-source.input';

@InputType()
export class FeedSourceNudgeCreateOrConnectWithoutSourceInput {

    @Field(() => FeedSourceNudgeWhereUniqueInput, {nullable:false})
    @Type(() => FeedSourceNudgeWhereUniqueInput)
    where!: Prisma.AtLeast<FeedSourceNudgeWhereUniqueInput, 'id'>;

    @Field(() => FeedSourceNudgeCreateWithoutSourceInput, {nullable:false})
    @Type(() => FeedSourceNudgeCreateWithoutSourceInput)
    create!: FeedSourceNudgeCreateWithoutSourceInput;
}
