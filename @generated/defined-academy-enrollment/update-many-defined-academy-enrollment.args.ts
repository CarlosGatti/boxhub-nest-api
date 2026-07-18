import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyEnrollmentUpdateManyMutationInput } from './defined-academy-enrollment-update-many-mutation.input';
import { Type } from 'class-transformer';
import { DefinedAcademyEnrollmentWhereInput } from './defined-academy-enrollment-where.input';

@ArgsType()
export class UpdateManyDefinedAcademyEnrollmentArgs {

    @Field(() => DefinedAcademyEnrollmentUpdateManyMutationInput, {nullable:false})
    @Type(() => DefinedAcademyEnrollmentUpdateManyMutationInput)
    data!: DefinedAcademyEnrollmentUpdateManyMutationInput;

    @Field(() => DefinedAcademyEnrollmentWhereInput, {nullable:true})
    @Type(() => DefinedAcademyEnrollmentWhereInput)
    where?: DefinedAcademyEnrollmentWhereInput;
}
