import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PublicationLikeCreateWithoutUserInput } from './publication-like-create-without-user.input';
import { Type } from 'class-transformer';
import { PublicationLikeCreateOrConnectWithoutUserInput } from './publication-like-create-or-connect-without-user.input';
import { PublicationLikeCreateManyUserInputEnvelope } from './publication-like-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PublicationLikeWhereUniqueInput } from './publication-like-where-unique.input';

@InputType()
export class PublicationLikeUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [PublicationLikeCreateWithoutUserInput], {nullable:true})
    @Type(() => PublicationLikeCreateWithoutUserInput)
    create?: Array<PublicationLikeCreateWithoutUserInput>;

    @Field(() => [PublicationLikeCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => PublicationLikeCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<PublicationLikeCreateOrConnectWithoutUserInput>;

    @Field(() => PublicationLikeCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => PublicationLikeCreateManyUserInputEnvelope)
    createMany?: PublicationLikeCreateManyUserInputEnvelope;

    @Field(() => [PublicationLikeWhereUniqueInput], {nullable:true})
    @Type(() => PublicationLikeWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PublicationLikeWhereUniqueInput, 'id'>>;
}
