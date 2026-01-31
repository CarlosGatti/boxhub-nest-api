import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FeedProfileWhereUniqueInput } from './feed-profile-where-unique.input';
import { Type } from 'class-transformer';
import { FeedProfileCreateInput } from './feed-profile-create.input';
import { FeedProfileUpdateInput } from './feed-profile-update.input';

@ArgsType()
export class UpsertOneFeedProfileArgs {

    @Field(() => FeedProfileWhereUniqueInput, {nullable:false})
    @Type(() => FeedProfileWhereUniqueInput)
    where!: Prisma.AtLeast<FeedProfileWhereUniqueInput, 'id' | 'userId'>;

    @Field(() => FeedProfileCreateInput, {nullable:false})
    @Type(() => FeedProfileCreateInput)
    create!: FeedProfileCreateInput;

    @Field(() => FeedProfileUpdateInput, {nullable:false})
    @Type(() => FeedProfileUpdateInput)
    update!: FeedProfileUpdateInput;
}
