import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyEnrollmentWhereUniqueInput } from './defined-academy-enrollment-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyEnrollmentCreateWithoutProgressInput } from './defined-academy-enrollment-create-without-progress.input';

@InputType()
export class DefinedAcademyEnrollmentCreateOrConnectWithoutProgressInput {

    @Field(() => DefinedAcademyEnrollmentWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyEnrollmentWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyEnrollmentWhereUniqueInput, 'id' | 'courseId_userId'>;

    @Field(() => DefinedAcademyEnrollmentCreateWithoutProgressInput, {nullable:false})
    @Type(() => DefinedAcademyEnrollmentCreateWithoutProgressInput)
    create!: DefinedAcademyEnrollmentCreateWithoutProgressInput;
}
