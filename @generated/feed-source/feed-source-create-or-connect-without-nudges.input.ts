import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FeedSourceWhereUniqueInput } from './feed-source-where-unique.input';
import { Type } from 'class-transformer';
import { FeedSourceCreateWithoutNudgesInput } from './feed-source-create-without-nudges.input';

@InputType()
export class FeedSourceCreateOrConnectWithoutNudgesInput {

    @Field(() => FeedSourceWhereUniqueInput, {nullable:false})
    @Type(() => FeedSourceWhereUniqueInput)
    where!: Prisma.AtLeast<FeedSourceWhereUniqueInput, 'id'>;

    @Field(() => FeedSourceCreateWithoutNudgesInput, {nullable:false})
    @Type(() => FeedSourceCreateWithoutNudgesInput)
    create!: FeedSourceCreateWithoutNudgesInput;
}
