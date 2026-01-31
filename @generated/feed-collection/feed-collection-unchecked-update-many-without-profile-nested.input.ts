import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedCollectionCreateWithoutProfileInput } from './feed-collection-create-without-profile.input';
import { Type } from 'class-transformer';
import { FeedCollectionCreateOrConnectWithoutProfileInput } from './feed-collection-create-or-connect-without-profile.input';
import { FeedCollectionUpsertWithWhereUniqueWithoutProfileInput } from './feed-collection-upsert-with-where-unique-without-profile.input';
import { FeedCollectionCreateManyProfileInputEnvelope } from './feed-collection-create-many-profile-input-envelope.input';
import { Prisma } from '@prisma/client';
import { FeedCollectionWhereUniqueInput } from './feed-collection-where-unique.input';
import { FeedCollectionUpdateWithWhereUniqueWithoutProfileInput } from './feed-collection-update-with-where-unique-without-profile.input';
import { FeedCollectionUpdateManyWithWhereWithoutProfileInput } from './feed-collection-update-many-with-where-without-profile.input';
import { FeedCollectionScalarWhereInput } from './feed-collection-scalar-where.input';

@InputType()
export class FeedCollectionUncheckedUpdateManyWithoutProfileNestedInput {

    @Field(() => [FeedCollectionCreateWithoutProfileInput], {nullable:true})
    @Type(() => FeedCollectionCreateWithoutProfileInput)
    create?: Array<FeedCollectionCreateWithoutProfileInput>;

    @Field(() => [FeedCollectionCreateOrConnectWithoutProfileInput], {nullable:true})
    @Type(() => FeedCollectionCreateOrConnectWithoutProfileInput)
    connectOrCreate?: Array<FeedCollectionCreateOrConnectWithoutProfileInput>;

    @Field(() => [FeedCollectionUpsertWithWhereUniqueWithoutProfileInput], {nullable:true})
    @Type(() => FeedCollectionUpsertWithWhereUniqueWithoutProfileInput)
    upsert?: Array<FeedCollectionUpsertWithWhereUniqueWithoutProfileInput>;

    @Field(() => FeedCollectionCreateManyProfileInputEnvelope, {nullable:true})
    @Type(() => FeedCollectionCreateManyProfileInputEnvelope)
    createMany?: FeedCollectionCreateManyProfileInputEnvelope;

    @Field(() => [FeedCollectionWhereUniqueInput], {nullable:true})
    @Type(() => FeedCollectionWhereUniqueInput)
    set?: Array<Prisma.AtLeast<FeedCollectionWhereUniqueInput, 'id' | 'profileId_name'>>;

    @Field(() => [FeedCollectionWhereUniqueInput], {nullable:true})
    @Type(() => FeedCollectionWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<FeedCollectionWhereUniqueInput, 'id' | 'profileId_name'>>;

    @Field(() => [FeedCollectionWhereUniqueInput], {nullable:true})
    @Type(() => FeedCollectionWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<FeedCollectionWhereUniqueInput, 'id' | 'profileId_name'>>;

    @Field(() => [FeedCollectionWhereUniqueInput], {nullable:true})
    @Type(() => FeedCollectionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<FeedCollectionWhereUniqueInput, 'id' | 'profileId_name'>>;

    @Field(() => [FeedCollectionUpdateWithWhereUniqueWithoutProfileInput], {nullable:true})
    @Type(() => FeedCollectionUpdateWithWhereUniqueWithoutProfileInput)
    update?: Array<FeedCollectionUpdateWithWhereUniqueWithoutProfileInput>;

    @Field(() => [FeedCollectionUpdateManyWithWhereWithoutProfileInput], {nullable:true})
    @Type(() => FeedCollectionUpdateManyWithWhereWithoutProfileInput)
    updateMany?: Array<FeedCollectionUpdateManyWithWhereWithoutProfileInput>;

    @Field(() => [FeedCollectionScalarWhereInput], {nullable:true})
    @Type(() => FeedCollectionScalarWhereInput)
    deleteMany?: Array<FeedCollectionScalarWhereInput>;
}
