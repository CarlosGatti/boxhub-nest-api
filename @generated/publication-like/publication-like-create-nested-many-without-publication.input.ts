import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PublicationLikeCreateWithoutPublicationInput } from './publication-like-create-without-publication.input';
import { Type } from 'class-transformer';
import { PublicationLikeCreateOrConnectWithoutPublicationInput } from './publication-like-create-or-connect-without-publication.input';
import { PublicationLikeCreateManyPublicationInputEnvelope } from './publication-like-create-many-publication-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PublicationLikeWhereUniqueInput } from './publication-like-where-unique.input';

@InputType()
export class PublicationLikeCreateNestedManyWithoutPublicationInput {

    @Field(() => [PublicationLikeCreateWithoutPublicationInput], {nullable:true})
    @Type(() => PublicationLikeCreateWithoutPublicationInput)
    create?: Array<PublicationLikeCreateWithoutPublicationInput>;

    @Field(() => [PublicationLikeCreateOrConnectWithoutPublicationInput], {nullable:true})
    @Type(() => PublicationLikeCreateOrConnectWithoutPublicationInput)
    connectOrCreate?: Array<PublicationLikeCreateOrConnectWithoutPublicationInput>;

    @Field(() => PublicationLikeCreateManyPublicationInputEnvelope, {nullable:true})
    @Type(() => PublicationLikeCreateManyPublicationInputEnvelope)
    createMany?: PublicationLikeCreateManyPublicationInputEnvelope;

    @Field(() => [PublicationLikeWhereUniqueInput], {nullable:true})
    @Type(() => PublicationLikeWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PublicationLikeWhereUniqueInput, 'id'>>;
}
