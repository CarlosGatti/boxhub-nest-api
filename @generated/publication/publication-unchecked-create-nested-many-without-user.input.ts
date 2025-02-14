import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PublicationCreateWithoutUserInput } from './publication-create-without-user.input';
import { Type } from 'class-transformer';
import { PublicationCreateOrConnectWithoutUserInput } from './publication-create-or-connect-without-user.input';
import { PublicationCreateManyUserInputEnvelope } from './publication-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PublicationWhereUniqueInput } from './publication-where-unique.input';

@InputType()
export class PublicationUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [PublicationCreateWithoutUserInput], {nullable:true})
    @Type(() => PublicationCreateWithoutUserInput)
    create?: Array<PublicationCreateWithoutUserInput>;

    @Field(() => [PublicationCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => PublicationCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<PublicationCreateOrConnectWithoutUserInput>;

    @Field(() => PublicationCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => PublicationCreateManyUserInputEnvelope)
    createMany?: PublicationCreateManyUserInputEnvelope;

    @Field(() => [PublicationWhereUniqueInput], {nullable:true})
    @Type(() => PublicationWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PublicationWhereUniqueInput, 'id'>>;
}
