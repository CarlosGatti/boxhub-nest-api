import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FeedCollectionUpdateInput } from './feed-collection-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { FeedCollectionWhereUniqueInput } from './feed-collection-where-unique.input';

@ArgsType()
export class UpdateOneFeedCollectionArgs {

    @Field(() => FeedCollectionUpdateInput, {nullable:false})
    @Type(() => FeedCollectionUpdateInput)
    data!: FeedCollectionUpdateInput;

    @Field(() => FeedCollectionWhereUniqueInput, {nullable:false})
    @Type(() => FeedCollectionWhereUniqueInput)
    where!: Prisma.AtLeast<FeedCollectionWhereUniqueInput, 'id' | 'profileId_name'>;
}
