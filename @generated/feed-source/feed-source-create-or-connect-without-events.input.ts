import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FeedSourceWhereUniqueInput } from './feed-source-where-unique.input';
import { Type } from 'class-transformer';
import { FeedSourceCreateWithoutEventsInput } from './feed-source-create-without-events.input';

@InputType()
export class FeedSourceCreateOrConnectWithoutEventsInput {

    @Field(() => FeedSourceWhereUniqueInput, {nullable:false})
    @Type(() => FeedSourceWhereUniqueInput)
    where!: Prisma.AtLeast<FeedSourceWhereUniqueInput, 'id'>;

    @Field(() => FeedSourceCreateWithoutEventsInput, {nullable:false})
    @Type(() => FeedSourceCreateWithoutEventsInput)
    create!: FeedSourceCreateWithoutEventsInput;
}
