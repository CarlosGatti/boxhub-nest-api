import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FeedEventWhereUniqueInput } from './feed-event-where-unique.input';
import { Type } from 'class-transformer';
import { FeedEventUpdateWithoutItemInput } from './feed-event-update-without-item.input';
import { FeedEventCreateWithoutItemInput } from './feed-event-create-without-item.input';

@InputType()
export class FeedEventUpsertWithWhereUniqueWithoutItemInput {

    @Field(() => FeedEventWhereUniqueInput, {nullable:false})
    @Type(() => FeedEventWhereUniqueInput)
    where!: Prisma.AtLeast<FeedEventWhereUniqueInput, 'id'>;

    @Field(() => FeedEventUpdateWithoutItemInput, {nullable:false})
    @Type(() => FeedEventUpdateWithoutItemInput)
    update!: FeedEventUpdateWithoutItemInput;

    @Field(() => FeedEventCreateWithoutItemInput, {nullable:false})
    @Type(() => FeedEventCreateWithoutItemInput)
    create!: FeedEventCreateWithoutItemInput;
}
