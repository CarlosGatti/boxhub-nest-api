import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyUserCareerProfileScalarWhereInput } from './defined-academy-user-career-profile-scalar-where.input';
import { Type } from 'class-transformer';
import { DefinedAcademyUserCareerProfileUpdateManyMutationInput } from './defined-academy-user-career-profile-update-many-mutation.input';

@InputType()
export class DefinedAcademyUserCareerProfileUpdateManyWithWhereWithoutCurrentStageInput {

    @Field(() => DefinedAcademyUserCareerProfileScalarWhereInput, {nullable:false})
    @Type(() => DefinedAcademyUserCareerProfileScalarWhereInput)
    where!: DefinedAcademyUserCareerProfileScalarWhereInput;

    @Field(() => DefinedAcademyUserCareerProfileUpdateManyMutationInput, {nullable:false})
    @Type(() => DefinedAcademyUserCareerProfileUpdateManyMutationInput)
    data!: DefinedAcademyUserCareerProfileUpdateManyMutationInput;
}
