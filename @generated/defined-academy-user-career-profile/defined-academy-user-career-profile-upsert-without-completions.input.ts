import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyUserCareerProfileUpdateWithoutCompletionsInput } from './defined-academy-user-career-profile-update-without-completions.input';
import { Type } from 'class-transformer';
import { DefinedAcademyUserCareerProfileCreateWithoutCompletionsInput } from './defined-academy-user-career-profile-create-without-completions.input';
import { DefinedAcademyUserCareerProfileWhereInput } from './defined-academy-user-career-profile-where.input';

@InputType()
export class DefinedAcademyUserCareerProfileUpsertWithoutCompletionsInput {

    @Field(() => DefinedAcademyUserCareerProfileUpdateWithoutCompletionsInput, {nullable:false})
    @Type(() => DefinedAcademyUserCareerProfileUpdateWithoutCompletionsInput)
    update!: DefinedAcademyUserCareerProfileUpdateWithoutCompletionsInput;

    @Field(() => DefinedAcademyUserCareerProfileCreateWithoutCompletionsInput, {nullable:false})
    @Type(() => DefinedAcademyUserCareerProfileCreateWithoutCompletionsInput)
    create!: DefinedAcademyUserCareerProfileCreateWithoutCompletionsInput;

    @Field(() => DefinedAcademyUserCareerProfileWhereInput, {nullable:true})
    @Type(() => DefinedAcademyUserCareerProfileWhereInput)
    where?: DefinedAcademyUserCareerProfileWhereInput;
}
