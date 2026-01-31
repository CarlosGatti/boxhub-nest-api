import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FeedProfileUpdateInput } from './feed-profile-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { FeedProfileWhereUniqueInput } from './feed-profile-where-unique.input';

@ArgsType()
export class UpdateOneFeedProfileArgs {

    @Field(() => FeedProfileUpdateInput, {nullable:false})
    @Type(() => FeedProfileUpdateInput)
    data!: FeedProfileUpdateInput;

    @Field(() => FeedProfileWhereUniqueInput, {nullable:false})
    @Type(() => FeedProfileWhereUniqueInput)
    where!: Prisma.AtLeast<FeedProfileWhereUniqueInput, 'id' | 'userId'>;
}
