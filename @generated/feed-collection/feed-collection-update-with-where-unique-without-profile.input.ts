import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FeedCollectionWhereUniqueInput } from './feed-collection-where-unique.input';
import { Type } from 'class-transformer';
import { FeedCollectionUpdateWithoutProfileInput } from './feed-collection-update-without-profile.input';

@InputType()
export class FeedCollectionUpdateWithWhereUniqueWithoutProfileInput {

    @Field(() => FeedCollectionWhereUniqueInput, {nullable:false})
    @Type(() => FeedCollectionWhereUniqueInput)
    where!: Prisma.AtLeast<FeedCollectionWhereUniqueInput, 'id' | 'profileId_name'>;

    @Field(() => FeedCollectionUpdateWithoutProfileInput, {nullable:false})
    @Type(() => FeedCollectionUpdateWithoutProfileInput)
    data!: FeedCollectionUpdateWithoutProfileInput;
}
