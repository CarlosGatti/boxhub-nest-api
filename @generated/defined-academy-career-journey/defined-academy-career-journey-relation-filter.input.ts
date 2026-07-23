import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyCareerJourneyWhereInput } from './defined-academy-career-journey-where.input';

@InputType()
export class DefinedAcademyCareerJourneyRelationFilter {

    @Field(() => DefinedAcademyCareerJourneyWhereInput, {nullable:true})
    is?: DefinedAcademyCareerJourneyWhereInput;

    @Field(() => DefinedAcademyCareerJourneyWhereInput, {nullable:true})
    isNot?: DefinedAcademyCareerJourneyWhereInput;
}
