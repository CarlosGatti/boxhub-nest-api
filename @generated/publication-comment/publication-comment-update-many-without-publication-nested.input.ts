import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PublicationCommentCreateWithoutPublicationInput } from './publication-comment-create-without-publication.input';
import { Type } from 'class-transformer';
import { PublicationCommentCreateOrConnectWithoutPublicationInput } from './publication-comment-create-or-connect-without-publication.input';
import { PublicationCommentUpsertWithWhereUniqueWithoutPublicationInput } from './publication-comment-upsert-with-where-unique-without-publication.input';
import { PublicationCommentCreateManyPublicationInputEnvelope } from './publication-comment-create-many-publication-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PublicationCommentWhereUniqueInput } from './publication-comment-where-unique.input';
import { PublicationCommentUpdateWithWhereUniqueWithoutPublicationInput } from './publication-comment-update-with-where-unique-without-publication.input';
import { PublicationCommentUpdateManyWithWhereWithoutPublicationInput } from './publication-comment-update-many-with-where-without-publication.input';
import { PublicationCommentScalarWhereInput } from './publication-comment-scalar-where.input';

@InputType()
export class PublicationCommentUpdateManyWithoutPublicationNestedInput {

    @Field(() => [PublicationCommentCreateWithoutPublicationInput], {nullable:true})
    @Type(() => PublicationCommentCreateWithoutPublicationInput)
    create?: Array<PublicationCommentCreateWithoutPublicationInput>;

    @Field(() => [PublicationCommentCreateOrConnectWithoutPublicationInput], {nullable:true})
    @Type(() => PublicationCommentCreateOrConnectWithoutPublicationInput)
    connectOrCreate?: Array<PublicationCommentCreateOrConnectWithoutPublicationInput>;

    @Field(() => [PublicationCommentUpsertWithWhereUniqueWithoutPublicationInput], {nullable:true})
    @Type(() => PublicationCommentUpsertWithWhereUniqueWithoutPublicationInput)
    upsert?: Array<PublicationCommentUpsertWithWhereUniqueWithoutPublicationInput>;

    @Field(() => PublicationCommentCreateManyPublicationInputEnvelope, {nullable:true})
    @Type(() => PublicationCommentCreateManyPublicationInputEnvelope)
    createMany?: PublicationCommentCreateManyPublicationInputEnvelope;

    @Field(() => [PublicationCommentWhereUniqueInput], {nullable:true})
    @Type(() => PublicationCommentWhereUniqueInput)
    set?: Array<Prisma.AtLeast<PublicationCommentWhereUniqueInput, 'id'>>;

    @Field(() => [PublicationCommentWhereUniqueInput], {nullable:true})
    @Type(() => PublicationCommentWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<PublicationCommentWhereUniqueInput, 'id'>>;

    @Field(() => [PublicationCommentWhereUniqueInput], {nullable:true})
    @Type(() => PublicationCommentWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<PublicationCommentWhereUniqueInput, 'id'>>;

    @Field(() => [PublicationCommentWhereUniqueInput], {nullable:true})
    @Type(() => PublicationCommentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PublicationCommentWhereUniqueInput, 'id'>>;

    @Field(() => [PublicationCommentUpdateWithWhereUniqueWithoutPublicationInput], {nullable:true})
    @Type(() => PublicationCommentUpdateWithWhereUniqueWithoutPublicationInput)
    update?: Array<PublicationCommentUpdateWithWhereUniqueWithoutPublicationInput>;

    @Field(() => [PublicationCommentUpdateManyWithWhereWithoutPublicationInput], {nullable:true})
    @Type(() => PublicationCommentUpdateManyWithWhereWithoutPublicationInput)
    updateMany?: Array<PublicationCommentUpdateManyWithWhereWithoutPublicationInput>;

    @Field(() => [PublicationCommentScalarWhereInput], {nullable:true})
    @Type(() => PublicationCommentScalarWhereInput)
    deleteMany?: Array<PublicationCommentScalarWhereInput>;
}
