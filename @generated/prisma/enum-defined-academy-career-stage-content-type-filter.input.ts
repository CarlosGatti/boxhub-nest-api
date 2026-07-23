import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyCareerStageContentType } from './defined-academy-career-stage-content-type.enum';
import { NestedEnumDefinedAcademyCareerStageContentTypeFilter } from './nested-enum-defined-academy-career-stage-content-type-filter.input';

@InputType()
export class EnumDefinedAcademyCareerStageContentTypeFilter {

    @Field(() => DefinedAcademyCareerStageContentType, {nullable:true})
    equals?: keyof typeof DefinedAcademyCareerStageContentType;

    @Field(() => [DefinedAcademyCareerStageContentType], {nullable:true})
    in?: Array<keyof typeof DefinedAcademyCareerStageContentType>;

    @Field(() => [DefinedAcademyCareerStageContentType], {nullable:true})
    notIn?: Array<keyof typeof DefinedAcademyCareerStageContentType>;

    @Field(() => NestedEnumDefinedAcademyCareerStageContentTypeFilter, {nullable:true})
    not?: NestedEnumDefinedAcademyCareerStageContentTypeFilter;
}
