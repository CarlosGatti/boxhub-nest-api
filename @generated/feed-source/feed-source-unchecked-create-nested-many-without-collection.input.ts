import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedSourceCreateWithoutCollectionInput } from './feed-source-create-without-collection.input';
import { Type } from 'class-transformer';
import { FeedSourceCreateOrConnectWithoutCollectionInput } from './feed-source-create-or-connect-without-collection.input';
import { FeedSourceCreateManyCollectionInputEnvelope } from './feed-source-create-many-collection-input-envelope.input';
import { Prisma } from '@prisma/client';
import { FeedSourceWhereUniqueInput } from './feed-source-where-unique.input';

@InputType()
export class FeedSourceUncheckedCreateNestedManyWithoutCollectionInput {

    @Field(() => [FeedSourceCreateWithoutCollectionInput], {nullable:true})
    @Type(() => FeedSourceCreateWithoutCollectionInput)
    create?: Array<FeedSourceCreateWithoutCollectionInput>;

    @Field(() => [FeedSourceCreateOrConnectWithoutCollectionInput], {nullable:true})
    @Type(() => FeedSourceCreateOrConnectWithoutCollectionInput)
    connectOrCreate?: Array<FeedSourceCreateOrConnectWithoutCollectionInput>;

    @Field(() => FeedSourceCreateManyCollectionInputEnvelope, {nullable:true})
    @Type(() => FeedSourceCreateManyCollectionInputEnvelope)
    createMany?: FeedSourceCreateManyCollectionInputEnvelope;

    @Field(() => [FeedSourceWhereUniqueInput], {nullable:true})
    @Type(() => FeedSourceWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<FeedSourceWhereUniqueInput, 'id'>>;
}
