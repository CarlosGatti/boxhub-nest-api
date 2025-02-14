import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PublicationCommentCreateWithoutUserInput } from './publication-comment-create-without-user.input';
import { Type } from 'class-transformer';
import { PublicationCommentCreateOrConnectWithoutUserInput } from './publication-comment-create-or-connect-without-user.input';
import { PublicationCommentUpsertWithWhereUniqueWithoutUserInput } from './publication-comment-upsert-with-where-unique-without-user.input';
import { PublicationCommentCreateManyUserInputEnvelope } from './publication-comment-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PublicationCommentWhereUniqueInput } from './publication-comment-where-unique.input';
import { PublicationCommentUpdateWithWhereUniqueWithoutUserInput } from './publication-comment-update-with-where-unique-without-user.input';
import { PublicationCommentUpdateManyWithWhereWithoutUserInput } from './publication-comment-update-many-with-where-without-user.input';
import { PublicationCommentScalarWhereInput } from './publication-comment-scalar-where.input';

@InputType()
export class PublicationCommentUpdateManyWithoutUserNestedInput {

    @Field(() => [PublicationCommentCreateWithoutUserInput], {nullable:true})
    @Type(() => PublicationCommentCreateWithoutUserInput)
    create?: Array<PublicationCommentCreateWithoutUserInput>;

    @Field(() => [PublicationCommentCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => PublicationCommentCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<PublicationCommentCreateOrConnectWithoutUserInput>;

    @Field(() => [PublicationCommentUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => PublicationCommentUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<PublicationCommentUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => PublicationCommentCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => PublicationCommentCreateManyUserInputEnvelope)
    createMany?: PublicationCommentCreateManyUserInputEnvelope;

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

    @Field(() => [PublicationCommentUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => PublicationCommentUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<PublicationCommentUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [PublicationCommentUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => PublicationCommentUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<PublicationCommentUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [PublicationCommentScalarWhereInput], {nullable:true})
    @Type(() => PublicationCommentScalarWhereInput)
    deleteMany?: Array<PublicationCommentScalarWhereInput>;
}
