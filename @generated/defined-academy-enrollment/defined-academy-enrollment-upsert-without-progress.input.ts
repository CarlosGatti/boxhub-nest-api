import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyEnrollmentUpdateWithoutProgressInput } from './defined-academy-enrollment-update-without-progress.input';
import { Type } from 'class-transformer';
import { DefinedAcademyEnrollmentCreateWithoutProgressInput } from './defined-academy-enrollment-create-without-progress.input';
import { DefinedAcademyEnrollmentWhereInput } from './defined-academy-enrollment-where.input';

@InputType()
export class DefinedAcademyEnrollmentUpsertWithoutProgressInput {

    @Field(() => DefinedAcademyEnrollmentUpdateWithoutProgressInput, {nullable:false})
    @Type(() => DefinedAcademyEnrollmentUpdateWithoutProgressInput)
    update!: DefinedAcademyEnrollmentUpdateWithoutProgressInput;

    @Field(() => DefinedAcademyEnrollmentCreateWithoutProgressInput, {nullable:false})
    @Type(() => DefinedAcademyEnrollmentCreateWithoutProgressInput)
    create!: DefinedAcademyEnrollmentCreateWithoutProgressInput;

    @Field(() => DefinedAcademyEnrollmentWhereInput, {nullable:true})
    @Type(() => DefinedAcademyEnrollmentWhereInput)
    where?: DefinedAcademyEnrollmentWhereInput;
}
