import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyCareerStageContentType } from './defined-academy-career-stage-content-type.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumDefinedAcademyCareerStageContentTypeFilter } from './nested-enum-defined-academy-career-stage-content-type-filter.input';

@InputType()
export class NestedEnumDefinedAcademyCareerStageContentTypeWithAggregatesFilter {

    @Field(() => DefinedAcademyCareerStageContentType, {nullable:true})
    equals?: keyof typeof DefinedAcademyCareerStageContentType;

    @Field(() => [DefinedAcademyCareerStageContentType], {nullable:true})
    in?: Array<keyof typeof DefinedAcademyCareerStageContentType>;

    @Field(() => [DefinedAcademyCareerStageContentType], {nullable:true})
    notIn?: Array<keyof typeof DefinedAcademyCareerStageContentType>;

    @Field(() => NestedEnumDefinedAcademyCareerStageContentTypeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumDefinedAcademyCareerStageContentTypeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumDefinedAcademyCareerStageContentTypeFilter, {nullable:true})
    _min?: NestedEnumDefinedAcademyCareerStageContentTypeFilter;

    @Field(() => NestedEnumDefinedAcademyCareerStageContentTypeFilter, {nullable:true})
    _max?: NestedEnumDefinedAcademyCareerStageContentTypeFilter;
}
