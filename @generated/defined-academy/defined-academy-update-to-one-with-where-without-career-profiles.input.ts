import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyWhereInput } from './defined-academy-where.input';
import { Type } from 'class-transformer';
import { DefinedAcademyUpdateWithoutCareerProfilesInput } from './defined-academy-update-without-career-profiles.input';

@InputType()
export class DefinedAcademyUpdateToOneWithWhereWithoutCareerProfilesInput {

    @Field(() => DefinedAcademyWhereInput, {nullable:true})
    @Type(() => DefinedAcademyWhereInput)
    where?: DefinedAcademyWhereInput;

    @Field(() => DefinedAcademyUpdateWithoutCareerProfilesInput, {nullable:false})
    @Type(() => DefinedAcademyUpdateWithoutCareerProfilesInput)
    data!: DefinedAcademyUpdateWithoutCareerProfilesInput;
}
