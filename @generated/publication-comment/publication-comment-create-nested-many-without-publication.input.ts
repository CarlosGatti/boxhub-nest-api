import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PublicationCommentCreateWithoutPublicationInput } from './publication-comment-create-without-publication.input';
import { Type } from 'class-transformer';
import { PublicationCommentCreateOrConnectWithoutPublicationInput } from './publication-comment-create-or-connect-without-publication.input';
import { PublicationCommentCreateManyPublicationInputEnvelope } from './publication-comment-create-many-publication-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PublicationCommentWhereUniqueInput } from './publication-comment-where-unique.input';

@InputType()
export class PublicationCommentCreateNestedManyWithoutPublicationInput {

    @Field(() => [PublicationCommentCreateWithoutPublicationInput], {nullable:true})
    @Type(() => PublicationCommentCreateWithoutPublicationInput)
    create?: Array<PublicationCommentCreateWithoutPublicationInput>;

    @Field(() => [PublicationCommentCreateOrConnectWithoutPublicationInput], {nullable:true})
    @Type(() => PublicationCommentCreateOrConnectWithoutPublicationInput)
    connectOrCreate?: Array<PublicationCommentCreateOrConnectWithoutPublicationInput>;

    @Field(() => PublicationCommentCreateManyPublicationInputEnvelope, {nullable:true})
    @Type(() => PublicationCommentCreateManyPublicationInputEnvelope)
    createMany?: PublicationCommentCreateManyPublicationInputEnvelope;

    @Field(() => [PublicationCommentWhereUniqueInput], {nullable:true})
    @Type(() => PublicationCommentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PublicationCommentWhereUniqueInput, 'id'>>;
}
