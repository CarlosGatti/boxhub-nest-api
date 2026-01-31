import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FeedSourceWhereUniqueInput } from './feed-source-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneFeedSourceArgs {

    @Field(() => FeedSourceWhereUniqueInput, {nullable:false})
    @Type(() => FeedSourceWhereUniqueInput)
    where!: Prisma.AtLeast<FeedSourceWhereUniqueInput, 'id'>;
}
