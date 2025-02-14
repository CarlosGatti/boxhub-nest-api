import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PublicationCreateWithoutUserInput } from './publication-create-without-user.input';
import { Type } from 'class-transformer';
import { PublicationCreateOrConnectWithoutUserInput } from './publication-create-or-connect-without-user.input';
import { PublicationUpsertWithWhereUniqueWithoutUserInput } from './publication-upsert-with-where-unique-without-user.input';
import { PublicationCreateManyUserInputEnvelope } from './publication-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PublicationWhereUniqueInput } from './publication-where-unique.input';
import { PublicationUpdateWithWhereUniqueWithoutUserInput } from './publication-update-with-where-unique-without-user.input';
import { PublicationUpdateManyWithWhereWithoutUserInput } from './publication-update-many-with-where-without-user.input';
import { PublicationScalarWhereInput } from './publication-scalar-where.input';

@InputType()
export class PublicationUpdateManyWithoutUserNestedInput {

    @Field(() => [PublicationCreateWithoutUserInput], {nullable:true})
    @Type(() => PublicationCreateWithoutUserInput)
    create?: Array<PublicationCreateWithoutUserInput>;

    @Field(() => [PublicationCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => PublicationCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<PublicationCreateOrConnectWithoutUserInput>;

    @Field(() => [PublicationUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => PublicationUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<PublicationUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => PublicationCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => PublicationCreateManyUserInputEnvelope)
    createMany?: PublicationCreateManyUserInputEnvelope;

    @Field(() => [PublicationWhereUniqueInput], {nullable:true})
    @Type(() => PublicationWhereUniqueInput)
    set?: Array<Prisma.AtLeast<PublicationWhereUniqueInput, 'id'>>;

    @Field(() => [PublicationWhereUniqueInput], {nullable:true})
    @Type(() => PublicationWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<PublicationWhereUniqueInput, 'id'>>;

    @Field(() => [PublicationWhereUniqueInput], {nullable:true})
    @Type(() => PublicationWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<PublicationWhereUniqueInput, 'id'>>;

    @Field(() => [PublicationWhereUniqueInput], {nullable:true})
    @Type(() => PublicationWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PublicationWhereUniqueInput, 'id'>>;

    @Field(() => [PublicationUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => PublicationUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<PublicationUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [PublicationUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => PublicationUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<PublicationUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [PublicationScalarWhereInput], {nullable:true})
    @Type(() => PublicationScalarWhereInput)
    deleteMany?: Array<PublicationScalarWhereInput>;
}
