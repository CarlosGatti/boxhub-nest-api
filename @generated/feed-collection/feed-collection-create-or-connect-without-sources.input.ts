import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FeedCollectionWhereUniqueInput } from './feed-collection-where-unique.input';
import { Type } from 'class-transformer';
import { FeedCollectionCreateWithoutSourcesInput } from './feed-collection-create-without-sources.input';

@InputType()
export class FeedCollectionCreateOrConnectWithoutSourcesInput {

    @Field(() => FeedCollectionWhereUniqueInput, {nullable:false})
    @Type(() => FeedCollectionWhereUniqueInput)
    where!: Prisma.AtLeast<FeedCollectionWhereUniqueInput, 'id' | 'profileId_name'>;

    @Field(() => FeedCollectionCreateWithoutSourcesInput, {nullable:false})
    @Type(() => FeedCollectionCreateWithoutSourcesInput)
    create!: FeedCollectionCreateWithoutSourcesInput;
}
