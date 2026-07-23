import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyCareerJourneyUpdateWithoutProfilesInput } from './defined-academy-career-journey-update-without-profiles.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCareerJourneyCreateWithoutProfilesInput } from './defined-academy-career-journey-create-without-profiles.input';
import { DefinedAcademyCareerJourneyWhereInput } from './defined-academy-career-journey-where.input';

@InputType()
export class DefinedAcademyCareerJourneyUpsertWithoutProfilesInput {

    @Field(() => DefinedAcademyCareerJourneyUpdateWithoutProfilesInput, {nullable:false})
    @Type(() => DefinedAcademyCareerJourneyUpdateWithoutProfilesInput)
    update!: DefinedAcademyCareerJourneyUpdateWithoutProfilesInput;

    @Field(() => DefinedAcademyCareerJourneyCreateWithoutProfilesInput, {nullable:false})
    @Type(() => DefinedAcademyCareerJourneyCreateWithoutProfilesInput)
    create!: DefinedAcademyCareerJourneyCreateWithoutProfilesInput;

    @Field(() => DefinedAcademyCareerJourneyWhereInput, {nullable:true})
    @Type(() => DefinedAcademyCareerJourneyWhereInput)
    where?: DefinedAcademyCareerJourneyWhereInput;
}
