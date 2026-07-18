import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyEnrollmentWhereInput } from './defined-academy-enrollment-where.input';
import { Type } from 'class-transformer';
import { DefinedAcademyEnrollmentUpdateWithoutProgressInput } from './defined-academy-enrollment-update-without-progress.input';

@InputType()
export class DefinedAcademyEnrollmentUpdateToOneWithWhereWithoutProgressInput {

    @Field(() => DefinedAcademyEnrollmentWhereInput, {nullable:true})
    @Type(() => DefinedAcademyEnrollmentWhereInput)
    where?: DefinedAcademyEnrollmentWhereInput;

    @Field(() => DefinedAcademyEnrollmentUpdateWithoutProgressInput, {nullable:false})
    @Type(() => DefinedAcademyEnrollmentUpdateWithoutProgressInput)
    data!: DefinedAcademyEnrollmentUpdateWithoutProgressInput;
}
