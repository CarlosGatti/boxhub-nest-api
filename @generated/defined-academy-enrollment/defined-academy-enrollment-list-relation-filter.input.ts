import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyEnrollmentWhereInput } from './defined-academy-enrollment-where.input';

@InputType()
export class DefinedAcademyEnrollmentListRelationFilter {

    @Field(() => DefinedAcademyEnrollmentWhereInput, {nullable:true})
    every?: DefinedAcademyEnrollmentWhereInput;

    @Field(() => DefinedAcademyEnrollmentWhereInput, {nullable:true})
    some?: DefinedAcademyEnrollmentWhereInput;

    @Field(() => DefinedAcademyEnrollmentWhereInput, {nullable:true})
    none?: DefinedAcademyEnrollmentWhereInput;
}
