import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyEnrollmentCreateInput } from './defined-academy-enrollment-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneDefinedAcademyEnrollmentArgs {

    @Field(() => DefinedAcademyEnrollmentCreateInput, {nullable:false})
    @Type(() => DefinedAcademyEnrollmentCreateInput)
    data!: DefinedAcademyEnrollmentCreateInput;
}
