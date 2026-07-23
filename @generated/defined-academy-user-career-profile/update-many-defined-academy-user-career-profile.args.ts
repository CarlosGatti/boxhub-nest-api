import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyUserCareerProfileUpdateManyMutationInput } from './defined-academy-user-career-profile-update-many-mutation.input';
import { Type } from 'class-transformer';
import { DefinedAcademyUserCareerProfileWhereInput } from './defined-academy-user-career-profile-where.input';

@ArgsType()
export class UpdateManyDefinedAcademyUserCareerProfileArgs {

    @Field(() => DefinedAcademyUserCareerProfileUpdateManyMutationInput, {nullable:false})
    @Type(() => DefinedAcademyUserCareerProfileUpdateManyMutationInput)
    data!: DefinedAcademyUserCareerProfileUpdateManyMutationInput;

    @Field(() => DefinedAcademyUserCareerProfileWhereInput, {nullable:true})
    @Type(() => DefinedAcademyUserCareerProfileWhereInput)
    where?: DefinedAcademyUserCareerProfileWhereInput;
}
