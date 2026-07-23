import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyCareerJourneyStatus } from './defined-academy-career-journey-status.enum';
import { NestedEnumDefinedAcademyCareerJourneyStatusWithAggregatesFilter } from './nested-enum-defined-academy-career-journey-status-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumDefinedAcademyCareerJourneyStatusFilter } from './nested-enum-defined-academy-career-journey-status-filter.input';

@InputType()
export class EnumDefinedAcademyCareerJourneyStatusWithAggregatesFilter {

    @Field(() => DefinedAcademyCareerJourneyStatus, {nullable:true})
    equals?: keyof typeof DefinedAcademyCareerJourneyStatus;

    @Field(() => [DefinedAcademyCareerJourneyStatus], {nullable:true})
    in?: Array<keyof typeof DefinedAcademyCareerJourneyStatus>;

    @Field(() => [DefinedAcademyCareerJourneyStatus], {nullable:true})
    notIn?: Array<keyof typeof DefinedAcademyCareerJourneyStatus>;

    @Field(() => NestedEnumDefinedAcademyCareerJourneyStatusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumDefinedAcademyCareerJourneyStatusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumDefinedAcademyCareerJourneyStatusFilter, {nullable:true})
    _min?: NestedEnumDefinedAcademyCareerJourneyStatusFilter;

    @Field(() => NestedEnumDefinedAcademyCareerJourneyStatusFilter, {nullable:true})
    _max?: NestedEnumDefinedAcademyCareerJourneyStatusFilter;
}
