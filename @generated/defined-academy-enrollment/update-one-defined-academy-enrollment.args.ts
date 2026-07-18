import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyEnrollmentUpdateInput } from './defined-academy-enrollment-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { DefinedAcademyEnrollmentWhereUniqueInput } from './defined-academy-enrollment-where-unique.input';

@ArgsType()
export class UpdateOneDefinedAcademyEnrollmentArgs {

    @Field(() => DefinedAcademyEnrollmentUpdateInput, {nullable:false})
    @Type(() => DefinedAcademyEnrollmentUpdateInput)
    data!: DefinedAcademyEnrollmentUpdateInput;

    @Field(() => DefinedAcademyEnrollmentWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyEnrollmentWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyEnrollmentWhereUniqueInput, 'id' | 'courseId_userId'>;
}
