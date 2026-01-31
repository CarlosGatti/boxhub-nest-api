import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FeedCollectionWhereUniqueInput } from './feed-collection-where-unique.input';
import { Type } from 'class-transformer';
import { FeedCollectionCreateInput } from './feed-collection-create.input';
import { FeedCollectionUpdateInput } from './feed-collection-update.input';

@ArgsType()
export class UpsertOneFeedCollectionArgs {

    @Field(() => FeedCollectionWhereUniqueInput, {nullable:false})
    @Type(() => FeedCollectionWhereUniqueInput)
    where!: Prisma.AtLeast<FeedCollectionWhereUniqueInput, 'id' | 'profileId_name'>;

    @Field(() => FeedCollectionCreateInput, {nullable:false})
    @Type(() => FeedCollectionCreateInput)
    create!: FeedCollectionCreateInput;

    @Field(() => FeedCollectionUpdateInput, {nullable:false})
    @Type(() => FeedCollectionUpdateInput)
    update!: FeedCollectionUpdateInput;
}
