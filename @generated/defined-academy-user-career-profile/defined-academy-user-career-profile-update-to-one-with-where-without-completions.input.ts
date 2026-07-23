import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyUserCareerProfileWhereInput } from './defined-academy-user-career-profile-where.input';
import { Type } from 'class-transformer';
import { DefinedAcademyUserCareerProfileUpdateWithoutCompletionsInput } from './defined-academy-user-career-profile-update-without-completions.input';

@InputType()
export class DefinedAcademyUserCareerProfileUpdateToOneWithWhereWithoutCompletionsInput {

    @Field(() => DefinedAcademyUserCareerProfileWhereInput, {nullable:true})
    @Type(() => DefinedAcademyUserCareerProfileWhereInput)
    where?: DefinedAcademyUserCareerProfileWhereInput;

    @Field(() => DefinedAcademyUserCareerProfileUpdateWithoutCompletionsInput, {nullable:false})
    @Type(() => DefinedAcademyUserCareerProfileUpdateWithoutCompletionsInput)
    data!: DefinedAcademyUserCareerProfileUpdateWithoutCompletionsInput;
}
