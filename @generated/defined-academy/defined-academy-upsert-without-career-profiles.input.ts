import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyUpdateWithoutCareerProfilesInput } from './defined-academy-update-without-career-profiles.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCreateWithoutCareerProfilesInput } from './defined-academy-create-without-career-profiles.input';
import { DefinedAcademyWhereInput } from './defined-academy-where.input';

@InputType()
export class DefinedAcademyUpsertWithoutCareerProfilesInput {

    @Field(() => DefinedAcademyUpdateWithoutCareerProfilesInput, {nullable:false})
    @Type(() => DefinedAcademyUpdateWithoutCareerProfilesInput)
    update!: DefinedAcademyUpdateWithoutCareerProfilesInput;

    @Field(() => DefinedAcademyCreateWithoutCareerProfilesInput, {nullable:false})
    @Type(() => DefinedAcademyCreateWithoutCareerProfilesInput)
    create!: DefinedAcademyCreateWithoutCareerProfilesInput;

    @Field(() => DefinedAcademyWhereInput, {nullable:true})
    @Type(() => DefinedAcademyWhereInput)
    where?: DefinedAcademyWhereInput;
}
