import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyUserCareerProfileWhereInput } from './defined-academy-user-career-profile-where.input';

@InputType()
export class DefinedAcademyUserCareerProfileListRelationFilter {

    @Field(() => DefinedAcademyUserCareerProfileWhereInput, {nullable:true})
    every?: DefinedAcademyUserCareerProfileWhereInput;

    @Field(() => DefinedAcademyUserCareerProfileWhereInput, {nullable:true})
    some?: DefinedAcademyUserCareerProfileWhereInput;

    @Field(() => DefinedAcademyUserCareerProfileWhereInput, {nullable:true})
    none?: DefinedAcademyUserCareerProfileWhereInput;
}
