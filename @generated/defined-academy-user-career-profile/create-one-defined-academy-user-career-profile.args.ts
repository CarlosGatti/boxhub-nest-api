import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyUserCareerProfileCreateInput } from './defined-academy-user-career-profile-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneDefinedAcademyUserCareerProfileArgs {

    @Field(() => DefinedAcademyUserCareerProfileCreateInput, {nullable:false})
    @Type(() => DefinedAcademyUserCareerProfileCreateInput)
    data!: DefinedAcademyUserCareerProfileCreateInput;
}
