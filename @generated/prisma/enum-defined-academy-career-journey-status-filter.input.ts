import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyCareerJourneyStatus } from './defined-academy-career-journey-status.enum';
import { NestedEnumDefinedAcademyCareerJourneyStatusFilter } from './nested-enum-defined-academy-career-journey-status-filter.input';

@InputType()
export class EnumDefinedAcademyCareerJourneyStatusFilter {

    @Field(() => DefinedAcademyCareerJourneyStatus, {nullable:true})
    equals?: keyof typeof DefinedAcademyCareerJourneyStatus;

    @Field(() => [DefinedAcademyCareerJourneyStatus], {nullable:true})
    in?: Array<keyof typeof DefinedAcademyCareerJourneyStatus>;

    @Field(() => [DefinedAcademyCareerJourneyStatus], {nullable:true})
    notIn?: Array<keyof typeof DefinedAcademyCareerJourneyStatus>;

    @Field(() => NestedEnumDefinedAcademyCareerJourneyStatusFilter, {nullable:true})
    not?: NestedEnumDefinedAcademyCareerJourneyStatusFilter;
}
