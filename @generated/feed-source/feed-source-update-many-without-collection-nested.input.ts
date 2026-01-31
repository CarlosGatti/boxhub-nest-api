import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedSourceCreateWithoutCollectionInput } from './feed-source-create-without-collection.input';
import { Type } from 'class-transformer';
import { FeedSourceCreateOrConnectWithoutCollectionInput } from './feed-source-create-or-connect-without-collection.input';
import { FeedSourceUpsertWithWhereUniqueWithoutCollectionInput } from './feed-source-upsert-with-where-unique-without-collection.input';
import { FeedSourceCreateManyCollectionInputEnvelope } from './feed-source-create-many-collection-input-envelope.input';
import { Prisma } from '@prisma/client';
import { FeedSourceWhereUniqueInput } from './feed-source-where-unique.input';
import { FeedSourceUpdateWithWhereUniqueWithoutCollectionInput } from './feed-source-update-with-where-unique-without-collection.input';
import { FeedSourceUpdateManyWithWhereWithoutCollectionInput } from './feed-source-update-many-with-where-without-collection.input';
import { FeedSourceScalarWhereInput } from './feed-source-scalar-where.input';

@InputType()
export class FeedSourceUpdateManyWithoutCollectionNestedInput {

    @Field(() => [FeedSourceCreateWithoutCollectionInput], {nullable:true})
    @Type(() => FeedSourceCreateWithoutCollectionInput)
    create?: Array<FeedSourceCreateWithoutCollectionInput>;

    @Field(() => [FeedSourceCreateOrConnectWithoutCollectionInput], {nullable:true})
    @Type(() => FeedSourceCreateOrConnectWithoutCollectionInput)
    connectOrCreate?: Array<FeedSourceCreateOrConnectWithoutCollectionInput>;

    @Field(() => [FeedSourceUpsertWithWhereUniqueWithoutCollectionInput], {nullable:true})
    @Type(() => FeedSourceUpsertWithWhereUniqueWithoutCollectionInput)
    upsert?: Array<FeedSourceUpsertWithWhereUniqueWithoutCollectionInput>;

    @Field(() => FeedSourceCreateManyCollectionInputEnvelope, {nullable:true})
    @Type(() => FeedSourceCreateManyCollectionInputEnvelope)
    createMany?: FeedSourceCreateManyCollectionInputEnvelope;

    @Field(() => [FeedSourceWhereUniqueInput], {nullable:true})
    @Type(() => FeedSourceWhereUniqueInput)
    set?: Array<Prisma.AtLeast<FeedSourceWhereUniqueInput, 'id'>>;

    @Field(() => [FeedSourceWhereUniqueInput], {nullable:true})
    @Type(() => FeedSourceWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<FeedSourceWhereUniqueInput, 'id'>>;

    @Field(() => [FeedSourceWhereUniqueInput], {nullable:true})
    @Type(() => FeedSourceWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<FeedSourceWhereUniqueInput, 'id'>>;

    @Field(() => [FeedSourceWhereUniqueInput], {nullable:true})
    @Type(() => FeedSourceWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<FeedSourceWhereUniqueInput, 'id'>>;

    @Field(() => [FeedSourceUpdateWithWhereUniqueWithoutCollectionInput], {nullable:true})
    @Type(() => FeedSourceUpdateWithWhereUniqueWithoutCollectionInput)
    update?: Array<FeedSourceUpdateWithWhereUniqueWithoutCollectionInput>;

    @Field(() => [FeedSourceUpdateManyWithWhereWithoutCollectionInput], {nullable:true})
    @Type(() => FeedSourceUpdateManyWithWhereWithoutCollectionInput)
    updateMany?: Array<FeedSourceUpdateManyWithWhereWithoutCollectionInput>;

    @Field(() => [FeedSourceScalarWhereInput], {nullable:true})
    @Type(() => FeedSourceScalarWhereInput)
    deleteMany?: Array<FeedSourceScalarWhereInput>;
}
