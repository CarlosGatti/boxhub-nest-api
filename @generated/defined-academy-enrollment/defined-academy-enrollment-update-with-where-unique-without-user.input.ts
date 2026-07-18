import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyEnrollmentWhereUniqueInput } from './defined-academy-enrollment-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyEnrollmentUpdateWithoutUserInput } from './defined-academy-enrollment-update-without-user.input';

@InputType()
export class DefinedAcademyEnrollmentUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => DefinedAcademyEnrollmentWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyEnrollmentWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyEnrollmentWhereUniqueInput, 'id' | 'courseId_userId'>;

    @Field(() => DefinedAcademyEnrollmentUpdateWithoutUserInput, {nullable:false})
    @Type(() => DefinedAcademyEnrollmentUpdateWithoutUserInput)
    data!: DefinedAcademyEnrollmentUpdateWithoutUserInput;
}
