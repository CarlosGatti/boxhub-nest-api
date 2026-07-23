import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyCareerJourneyUpdateWithoutAcademyInput } from './defined-academy-career-journey-update-without-academy.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCareerJourneyCreateWithoutAcademyInput } from './defined-academy-career-journey-create-without-academy.input';
import { DefinedAcademyCareerJourneyWhereInput } from './defined-academy-career-journey-where.input';

@InputType()
export class DefinedAcademyCareerJourneyUpsertWithoutAcademyInput {

    @Field(() => DefinedAcademyCareerJourneyUpdateWithoutAcademyInput, {nullable:false})
    @Type(() => DefinedAcademyCareerJourneyUpdateWithoutAcademyInput)
    update!: DefinedAcademyCareerJourneyUpdateWithoutAcademyInput;

    @Field(() => DefinedAcademyCareerJourneyCreateWithoutAcademyInput, {nullable:false})
    @Type(() => DefinedAcademyCareerJourneyCreateWithoutAcademyInput)
    create!: DefinedAcademyCareerJourneyCreateWithoutAcademyInput;

    @Field(() => DefinedAcademyCareerJourneyWhereInput, {nullable:true})
    @Type(() => DefinedAcademyCareerJourneyWhereInput)
    where?: DefinedAcademyCareerJourneyWhereInput;
}
