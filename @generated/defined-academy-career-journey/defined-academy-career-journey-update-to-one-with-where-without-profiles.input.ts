import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyCareerJourneyWhereInput } from './defined-academy-career-journey-where.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCareerJourneyUpdateWithoutProfilesInput } from './defined-academy-career-journey-update-without-profiles.input';

@InputType()
export class DefinedAcademyCareerJourneyUpdateToOneWithWhereWithoutProfilesInput {

    @Field(() => DefinedAcademyCareerJourneyWhereInput, {nullable:true})
    @Type(() => DefinedAcademyCareerJourneyWhereInput)
    where?: DefinedAcademyCareerJourneyWhereInput;

    @Field(() => DefinedAcademyCareerJourneyUpdateWithoutProfilesInput, {nullable:false})
    @Type(() => DefinedAcademyCareerJourneyUpdateWithoutProfilesInput)
    data!: DefinedAcademyCareerJourneyUpdateWithoutProfilesInput;
}
