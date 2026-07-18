import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyEnrollmentCreateWithoutUserInput } from './defined-academy-enrollment-create-without-user.input';
import { Type } from 'class-transformer';
import { DefinedAcademyEnrollmentCreateOrConnectWithoutUserInput } from './defined-academy-enrollment-create-or-connect-without-user.input';
import { DefinedAcademyEnrollmentCreateManyUserInputEnvelope } from './defined-academy-enrollment-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyEnrollmentWhereUniqueInput } from './defined-academy-enrollment-where-unique.input';

@InputType()
export class DefinedAcademyEnrollmentCreateNestedManyWithoutUserInput {

    @Field(() => [DefinedAcademyEnrollmentCreateWithoutUserInput], {nullable:true})
    @Type(() => DefinedAcademyEnrollmentCreateWithoutUserInput)
    create?: Array<DefinedAcademyEnrollmentCreateWithoutUserInput>;

    @Field(() => [DefinedAcademyEnrollmentCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => DefinedAcademyEnrollmentCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<DefinedAcademyEnrollmentCreateOrConnectWithoutUserInput>;

    @Field(() => DefinedAcademyEnrollmentCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => DefinedAcademyEnrollmentCreateManyUserInputEnvelope)
    createMany?: DefinedAcademyEnrollmentCreateManyUserInputEnvelope;

    @Field(() => [DefinedAcademyEnrollmentWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyEnrollmentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DefinedAcademyEnrollmentWhereUniqueInput, 'id' | 'courseId_userId'>>;
}
