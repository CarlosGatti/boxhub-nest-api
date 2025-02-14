import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PublicationCommentCreateWithoutUserInput } from './publication-comment-create-without-user.input';
import { Type } from 'class-transformer';
import { PublicationCommentCreateOrConnectWithoutUserInput } from './publication-comment-create-or-connect-without-user.input';
import { PublicationCommentCreateManyUserInputEnvelope } from './publication-comment-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PublicationCommentWhereUniqueInput } from './publication-comment-where-unique.input';

@InputType()
export class PublicationCommentCreateNestedManyWithoutUserInput {

    @Field(() => [PublicationCommentCreateWithoutUserInput], {nullable:true})
    @Type(() => PublicationCommentCreateWithoutUserInput)
    create?: Array<PublicationCommentCreateWithoutUserInput>;

    @Field(() => [PublicationCommentCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => PublicationCommentCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<PublicationCommentCreateOrConnectWithoutUserInput>;

    @Field(() => PublicationCommentCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => PublicationCommentCreateManyUserInputEnvelope)
    createMany?: PublicationCommentCreateManyUserInputEnvelope;

    @Field(() => [PublicationCommentWhereUniqueInput], {nullable:true})
    @Type(() => PublicationCommentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PublicationCommentWhereUniqueInput, 'id'>>;
}
