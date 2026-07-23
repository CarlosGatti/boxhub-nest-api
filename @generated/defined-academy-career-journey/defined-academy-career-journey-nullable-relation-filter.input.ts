import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyCareerJourneyWhereInput } from './defined-academy-career-journey-where.input';

@InputType()
export class DefinedAcademyCareerJourneyNullableRelationFilter {

    @Field(() => DefinedAcademyCareerJourneyWhereInput, {nullable:true})
    is?: DefinedAcademyCareerJourneyWhereInput;

    @Field(() => DefinedAcademyCareerJourneyWhereInput, {nullable:true})
    isNot?: DefinedAcademyCareerJourneyWhereInput;
}
