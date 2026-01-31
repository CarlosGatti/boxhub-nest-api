import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FeedCollectionWhereUniqueInput } from './feed-collection-where-unique.input';
import { Type } from 'class-transformer';
import { FeedCollectionCreateWithoutProfileInput } from './feed-collection-create-without-profile.input';

@InputType()
export class FeedCollectionCreateOrConnectWithoutProfileInput {

    @Field(() => FeedCollectionWhereUniqueInput, {nullable:false})
    @Type(() => FeedCollectionWhereUniqueInput)
    where!: Prisma.AtLeast<FeedCollectionWhereUniqueInput, 'id' | 'profileId_name'>;

    @Field(() => FeedCollectionCreateWithoutProfileInput, {nullable:false})
    @Type(() => FeedCollectionCreateWithoutProfileInput)
    create!: FeedCollectionCreateWithoutProfileInput;
}
