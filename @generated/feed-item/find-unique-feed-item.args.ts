import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FeedItemWhereUniqueInput } from './feed-item-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueFeedItemArgs {

    @Field(() => FeedItemWhereUniqueInput, {nullable:false})
    @Type(() => FeedItemWhereUniqueInput)
    where!: Prisma.AtLeast<FeedItemWhereUniqueInput, 'id' | 'contentHash'>;
}
