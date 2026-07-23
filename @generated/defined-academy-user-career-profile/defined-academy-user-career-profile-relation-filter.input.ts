import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyUserCareerProfileWhereInput } from './defined-academy-user-career-profile-where.input';

@InputType()
export class DefinedAcademyUserCareerProfileRelationFilter {

    @Field(() => DefinedAcademyUserCareerProfileWhereInput, {nullable:true})
    is?: DefinedAcademyUserCareerProfileWhereInput;

    @Field(() => DefinedAcademyUserCareerProfileWhereInput, {nullable:true})
    isNot?: DefinedAcademyUserCareerProfileWhereInput;
}
