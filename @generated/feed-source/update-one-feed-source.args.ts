import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FeedSourceUpdateInput } from './feed-source-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { FeedSourceWhereUniqueInput } from './feed-source-where-unique.input';

@ArgsType()
export class UpdateOneFeedSourceArgs {

    @Field(() => FeedSourceUpdateInput, {nullable:false})
    @Type(() => FeedSourceUpdateInput)
    data!: FeedSourceUpdateInput;

    @Field(() => FeedSourceWhereUniqueInput, {nullable:false})
    @Type(() => FeedSourceWhereUniqueInput)
    where!: Prisma.AtLeast<FeedSourceWhereUniqueInput, 'id'>;
}
