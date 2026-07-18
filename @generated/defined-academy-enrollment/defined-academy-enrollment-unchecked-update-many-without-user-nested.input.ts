import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyEnrollmentCreateWithoutUserInput } from './defined-academy-enrollment-create-without-user.input';
import { Type } from 'class-transformer';
import { DefinedAcademyEnrollmentCreateOrConnectWithoutUserInput } from './defined-academy-enrollment-create-or-connect-without-user.input';
import { DefinedAcademyEnrollmentUpsertWithWhereUniqueWithoutUserInput } from './defined-academy-enrollment-upsert-with-where-unique-without-user.input';
import { DefinedAcademyEnrollmentCreateManyUserInputEnvelope } from './defined-academy-enrollment-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyEnrollmentWhereUniqueInput } from './defined-academy-enrollment-where-unique.input';
import { DefinedAcademyEnrollmentUpdateWithWhereUniqueWithoutUserInput } from './defined-academy-enrollment-update-with-where-unique-without-user.input';
import { DefinedAcademyEnrollmentUpdateManyWithWhereWithoutUserInput } from './defined-academy-enrollment-update-many-with-where-without-user.input';
import { DefinedAcademyEnrollmentScalarWhereInput } from './defined-academy-enrollment-scalar-where.input';

@InputType()
export class DefinedAcademyEnrollmentUncheckedUpdateManyWithoutUserNestedInput {

    @Field(() => [DefinedAcademyEnrollmentCreateWithoutUserInput], {nullable:true})
    @Type(() => DefinedAcademyEnrollmentCreateWithoutUserInput)
    create?: Array<DefinedAcademyEnrollmentCreateWithoutUserInput>;

    @Field(() => [DefinedAcademyEnrollmentCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => DefinedAcademyEnrollmentCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<DefinedAcademyEnrollmentCreateOrConnectWithoutUserInput>;

    @Field(() => [DefinedAcademyEnrollmentUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => DefinedAcademyEnrollmentUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<DefinedAcademyEnrollmentUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => DefinedAcademyEnrollmentCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => DefinedAcademyEnrollmentCreateManyUserInputEnvelope)
    createMany?: DefinedAcademyEnrollmentCreateManyUserInputEnvelope;

    @Field(() => [DefinedAcademyEnrollmentWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyEnrollmentWhereUniqueInput)
    set?: Array<Prisma.AtLeast<DefinedAcademyEnrollmentWhereUniqueInput, 'id' | 'courseId_userId'>>;

    @Field(() => [DefinedAcademyEnrollmentWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyEnrollmentWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<DefinedAcademyEnrollmentWhereUniqueInput, 'id' | 'courseId_userId'>>;

    @Field(() => [DefinedAcademyEnrollmentWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyEnrollmentWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<DefinedAcademyEnrollmentWhereUniqueInput, 'id' | 'courseId_userId'>>;

    @Field(() => [DefinedAcademyEnrollmentWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyEnrollmentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DefinedAcademyEnrollmentWhereUniqueInput, 'id' | 'courseId_userId'>>;

    @Field(() => [DefinedAcademyEnrollmentUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => DefinedAcademyEnrollmentUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<DefinedAcademyEnrollmentUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [DefinedAcademyEnrollmentUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => DefinedAcademyEnrollmentUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<DefinedAcademyEnrollmentUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [DefinedAcademyEnrollmentScalarWhereInput], {nullable:true})
    @Type(() => DefinedAcademyEnrollmentScalarWhereInput)
    deleteMany?: Array<DefinedAcademyEnrollmentScalarWhereInput>;
}
