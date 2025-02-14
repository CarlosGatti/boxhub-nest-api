import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PublicationCreateWithoutCommunityInput } from './publication-create-without-community.input';
import { Type } from 'class-transformer';
import { PublicationCreateOrConnectWithoutCommunityInput } from './publication-create-or-connect-without-community.input';
import { PublicationCreateManyCommunityInputEnvelope } from './publication-create-many-community-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PublicationWhereUniqueInput } from './publication-where-unique.input';

@InputType()
export class PublicationCreateNestedManyWithoutCommunityInput {

    @Field(() => [PublicationCreateWithoutCommunityInput], {nullable:true})
    @Type(() => PublicationCreateWithoutCommunityInput)
    create?: Array<PublicationCreateWithoutCommunityInput>;

    @Field(() => [PublicationCreateOrConnectWithoutCommunityInput], {nullable:true})
    @Type(() => PublicationCreateOrConnectWithoutCommunityInput)
    connectOrCreate?: Array<PublicationCreateOrConnectWithoutCommunityInput>;

    @Field(() => PublicationCreateManyCommunityInputEnvelope, {nullable:true})
    @Type(() => PublicationCreateManyCommunityInputEnvelope)
    createMany?: PublicationCreateManyCommunityInputEnvelope;

    @Field(() => [PublicationWhereUniqueInput], {nullable:true})
    @Type(() => PublicationWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PublicationWhereUniqueInput, 'id'>>;
}
