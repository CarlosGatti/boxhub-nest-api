import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyEnrollmentWhereInput } from './defined-academy-enrollment-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyDefinedAcademyEnrollmentArgs {

    @Field(() => DefinedAcademyEnrollmentWhereInput, {nullable:true})
    @Type(() => DefinedAcademyEnrollmentWhereInput)
    where?: DefinedAcademyEnrollmentWhereInput;
}
