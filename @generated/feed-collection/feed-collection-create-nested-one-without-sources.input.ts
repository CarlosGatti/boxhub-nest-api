import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedCollectionCreateWithoutSourcesInput } from './feed-collection-create-without-sources.input';
import { Type } from 'class-transformer';
import { FeedCollectionCreateOrConnectWithoutSourcesInput } from './feed-collection-create-or-connect-without-sources.input';
import { Prisma } from '@prisma/client';
import { FeedCollectionWhereUniqueInput } from './feed-collection-where-unique.input';

@InputType()
export class FeedCollectionCreateNestedOneWithoutSourcesInput {

    @Field(() => FeedCollectionCreateWithoutSourcesInput, {nullable:true})
    @Type(() => FeedCollectionCreateWithoutSourcesInput)
    create?: FeedCollectionCreateWithoutSourcesInput;

    @Field(() => FeedCollectionCreateOrConnectWithoutSourcesInput, {nullable:true})
    @Type(() => FeedCollectionCreateOrConnectWithoutSourcesInput)
    connectOrCreate?: FeedCollectionCreateOrConnectWithoutSourcesInput;

    @Field(() => FeedCollectionWhereUniqueInput, {nullable:true})
    @Type(() => FeedCollectionWhereUniqueInput)
    connect?: Prisma.AtLeast<FeedCollectionWhereUniqueInput, 'id' | 'profileId_name'>;
}
