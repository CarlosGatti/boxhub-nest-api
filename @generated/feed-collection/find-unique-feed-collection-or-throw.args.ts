import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FeedCollectionWhereUniqueInput } from './feed-collection-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueFeedCollectionOrThrowArgs {

    @Field(() => FeedCollectionWhereUniqueInput, {nullable:false})
    @Type(() => FeedCollectionWhereUniqueInput)
    where!: Prisma.AtLeast<FeedCollectionWhereUniqueInput, 'id' | 'profileId_name'>;
}
