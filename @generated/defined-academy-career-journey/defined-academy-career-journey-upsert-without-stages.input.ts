import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyCareerJourneyUpdateWithoutStagesInput } from './defined-academy-career-journey-update-without-stages.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCareerJourneyCreateWithoutStagesInput } from './defined-academy-career-journey-create-without-stages.input';
import { DefinedAcademyCareerJourneyWhereInput } from './defined-academy-career-journey-where.input';

@InputType()
export class DefinedAcademyCareerJourneyUpsertWithoutStagesInput {

    @Field(() => DefinedAcademyCareerJourneyUpdateWithoutStagesInput, {nullable:false})
    @Type(() => DefinedAcademyCareerJourneyUpdateWithoutStagesInput)
    update!: DefinedAcademyCareerJourneyUpdateWithoutStagesInput;

    @Field(() => DefinedAcademyCareerJourneyCreateWithoutStagesInput, {nullable:false})
    @Type(() => DefinedAcademyCareerJourneyCreateWithoutStagesInput)
    create!: DefinedAcademyCareerJourneyCreateWithoutStagesInput;

    @Field(() => DefinedAcademyCareerJourneyWhereInput, {nullable:true})
    @Type(() => DefinedAcademyCareerJourneyWhereInput)
    where?: DefinedAcademyCareerJourneyWhereInput;
}
