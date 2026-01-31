import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FeedSourceWhereUniqueInput } from './feed-source-where-unique.input';
import { Type } from 'class-transformer';
import { FeedSourceCreateInput } from './feed-source-create.input';
import { FeedSourceUpdateInput } from './feed-source-update.input';

@ArgsType()
export class UpsertOneFeedSourceArgs {

    @Field(() => FeedSourceWhereUniqueInput, {nullable:false})
    @Type(() => FeedSourceWhereUniqueInput)
    where!: Prisma.AtLeast<FeedSourceWhereUniqueInput, 'id'>;

    @Field(() => FeedSourceCreateInput, {nullable:false})
    @Type(() => FeedSourceCreateInput)
    create!: FeedSourceCreateInput;

    @Field(() => FeedSourceUpdateInput, {nullable:false})
    @Type(() => FeedSourceUpdateInput)
    update!: FeedSourceUpdateInput;
}
