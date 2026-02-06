import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FeedEventUpdateInput } from './feed-event-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { FeedEventWhereUniqueInput } from './feed-event-where-unique.input';

@ArgsType()
export class UpdateOneFeedEventArgs {

    @Field(() => FeedEventUpdateInput, {nullable:false})
    @Type(() => FeedEventUpdateInput)
    data!: FeedEventUpdateInput;

    @Field(() => FeedEventWhereUniqueInput, {nullable:false})
    @Type(() => FeedEventWhereUniqueInput)
    where!: Prisma.AtLeast<FeedEventWhereUniqueInput, 'id'>;
}
