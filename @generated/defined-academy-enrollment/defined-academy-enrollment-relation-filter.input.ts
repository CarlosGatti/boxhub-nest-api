import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyEnrollmentWhereInput } from './defined-academy-enrollment-where.input';

@InputType()
export class DefinedAcademyEnrollmentRelationFilter {

    @Field(() => DefinedAcademyEnrollmentWhereInput, {nullable:true})
    is?: DefinedAcademyEnrollmentWhereInput;

    @Field(() => DefinedAcademyEnrollmentWhereInput, {nullable:true})
    isNot?: DefinedAcademyEnrollmentWhereInput;
}
