import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyEnrollmentCreateWithoutProgressInput } from './defined-academy-enrollment-create-without-progress.input';
import { Type } from 'class-transformer';
import { DefinedAcademyEnrollmentCreateOrConnectWithoutProgressInput } from './defined-academy-enrollment-create-or-connect-without-progress.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyEnrollmentWhereUniqueInput } from './defined-academy-enrollment-where-unique.input';

@InputType()
export class DefinedAcademyEnrollmentCreateNestedOneWithoutProgressInput {

    @Field(() => DefinedAcademyEnrollmentCreateWithoutProgressInput, {nullable:true})
    @Type(() => DefinedAcademyEnrollmentCreateWithoutProgressInput)
    create?: DefinedAcademyEnrollmentCreateWithoutProgressInput;

    @Field(() => DefinedAcademyEnrollmentCreateOrConnectWithoutProgressInput, {nullable:true})
    @Type(() => DefinedAcademyEnrollmentCreateOrConnectWithoutProgressInput)
    connectOrCreate?: DefinedAcademyEnrollmentCreateOrConnectWithoutProgressInput;

    @Field(() => DefinedAcademyEnrollmentWhereUniqueInput, {nullable:true})
    @Type(() => DefinedAcademyEnrollmentWhereUniqueInput)
    connect?: Prisma.AtLeast<DefinedAcademyEnrollmentWhereUniqueInput, 'id' | 'courseId_userId'>;
}
