import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FeedEventWhereUniqueInput } from './feed-event-where-unique.input';
import { Type } from 'class-transformer';
import { FeedEventUpdateWithoutSourceInput } from './feed-event-update-without-source.input';
import { FeedEventCreateWithoutSourceInput } from './feed-event-create-without-source.input';

@InputType()
export class FeedEventUpsertWithWhereUniqueWithoutSourceInput {

    @Field(() => FeedEventWhereUniqueInput, {nullable:false})
    @Type(() => FeedEventWhereUniqueInput)
    where!: Prisma.AtLeast<FeedEventWhereUniqueInput, 'id'>;

    @Field(() => FeedEventUpdateWithoutSourceInput, {nullable:false})
    @Type(() => FeedEventUpdateWithoutSourceInput)
    update!: FeedEventUpdateWithoutSourceInput;

    @Field(() => FeedEventCreateWithoutSourceInput, {nullable:false})
    @Type(() => FeedEventCreateWithoutSourceInput)
    create!: FeedEventCreateWithoutSourceInput;
}
