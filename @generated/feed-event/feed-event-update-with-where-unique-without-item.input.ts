import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FeedEventWhereUniqueInput } from './feed-event-where-unique.input';
import { Type } from 'class-transformer';
import { FeedEventUpdateWithoutItemInput } from './feed-event-update-without-item.input';

@InputType()
export class FeedEventUpdateWithWhereUniqueWithoutItemInput {

    @Field(() => FeedEventWhereUniqueInput, {nullable:false})
    @Type(() => FeedEventWhereUniqueInput)
    where!: Prisma.AtLeast<FeedEventWhereUniqueInput, 'id'>;

    @Field(() => FeedEventUpdateWithoutItemInput, {nullable:false})
    @Type(() => FeedEventUpdateWithoutItemInput)
    data!: FeedEventUpdateWithoutItemInput;
}
