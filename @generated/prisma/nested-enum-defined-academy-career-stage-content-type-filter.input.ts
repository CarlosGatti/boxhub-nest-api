import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyCareerStageContentType } from './defined-academy-career-stage-content-type.enum';

@InputType()
export class NestedEnumDefinedAcademyCareerStageContentTypeFilter {

    @Field(() => DefinedAcademyCareerStageContentType, {nullable:true})
    equals?: keyof typeof DefinedAcademyCareerStageContentType;

    @Field(() => [DefinedAcademyCareerStageContentType], {nullable:true})
    in?: Array<keyof typeof DefinedAcademyCareerStageContentType>;

    @Field(() => [DefinedAcademyCareerStageContentType], {nullable:true})
    notIn?: Array<keyof typeof DefinedAcademyCareerStageContentType>;

    @Field(() => NestedEnumDefinedAcademyCareerStageContentTypeFilter, {nullable:true})
    not?: NestedEnumDefinedAcademyCareerStageContentTypeFilter;
}
