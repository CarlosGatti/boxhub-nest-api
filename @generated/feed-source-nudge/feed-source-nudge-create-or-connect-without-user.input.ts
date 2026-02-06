import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FeedSourceNudgeWhereUniqueInput } from './feed-source-nudge-where-unique.input';
import { Type } from 'class-transformer';
import { FeedSourceNudgeCreateWithoutUserInput } from './feed-source-nudge-create-without-user.input';

@InputType()
export class FeedSourceNudgeCreateOrConnectWithoutUserInput {

    @Field(() => FeedSourceNudgeWhereUniqueInput, {nullable:false})
    @Type(() => FeedSourceNudgeWhereUniqueInput)
    where!: Prisma.AtLeast<FeedSourceNudgeWhereUniqueInput, 'id'>;

    @Field(() => FeedSourceNudgeCreateWithoutUserInput, {nullable:false})
    @Type(() => FeedSourceNudgeCreateWithoutUserInput)
    create!: FeedSourceNudgeCreateWithoutUserInput;
}
