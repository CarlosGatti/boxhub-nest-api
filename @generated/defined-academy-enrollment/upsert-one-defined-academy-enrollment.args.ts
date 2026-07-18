import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyEnrollmentWhereUniqueInput } from './defined-academy-enrollment-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyEnrollmentCreateInput } from './defined-academy-enrollment-create.input';
import { DefinedAcademyEnrollmentUpdateInput } from './defined-academy-enrollment-update.input';

@ArgsType()
export class UpsertOneDefinedAcademyEnrollmentArgs {

    @Field(() => DefinedAcademyEnrollmentWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyEnrollmentWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyEnrollmentWhereUniqueInput, 'id' | 'courseId_userId'>;

    @Field(() => DefinedAcademyEnrollmentCreateInput, {nullable:false})
    @Type(() => DefinedAcademyEnrollmentCreateInput)
    create!: DefinedAcademyEnrollmentCreateInput;

    @Field(() => DefinedAcademyEnrollmentUpdateInput, {nullable:false})
    @Type(() => DefinedAcademyEnrollmentUpdateInput)
    update!: DefinedAcademyEnrollmentUpdateInput;
}
