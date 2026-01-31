import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedCollectionCreateWithoutProfileInput } from './feed-collection-create-without-profile.input';
import { Type } from 'class-transformer';
import { FeedCollectionCreateOrConnectWithoutProfileInput } from './feed-collection-create-or-connect-without-profile.input';
import { FeedCollectionCreateManyProfileInputEnvelope } from './feed-collection-create-many-profile-input-envelope.input';
import { Prisma } from '@prisma/client';
import { FeedCollectionWhereUniqueInput } from './feed-collection-where-unique.input';

@InputType()
export class FeedCollectionUncheckedCreateNestedManyWithoutProfileInput {

    @Field(() => [FeedCollectionCreateWithoutProfileInput], {nullable:true})
    @Type(() => FeedCollectionCreateWithoutProfileInput)
    create?: Array<FeedCollectionCreateWithoutProfileInput>;

    @Field(() => [FeedCollectionCreateOrConnectWithoutProfileInput], {nullable:true})
    @Type(() => FeedCollectionCreateOrConnectWithoutProfileInput)
    connectOrCreate?: Array<FeedCollectionCreateOrConnectWithoutProfileInput>;

    @Field(() => FeedCollectionCreateManyProfileInputEnvelope, {nullable:true})
    @Type(() => FeedCollectionCreateManyProfileInputEnvelope)
    createMany?: FeedCollectionCreateManyProfileInputEnvelope;

    @Field(() => [FeedCollectionWhereUniqueInput], {nullable:true})
    @Type(() => FeedCollectionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<FeedCollectionWhereUniqueInput, 'id' | 'profileId_name'>>;
}
