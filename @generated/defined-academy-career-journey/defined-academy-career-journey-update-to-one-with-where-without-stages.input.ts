import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyCareerJourneyWhereInput } from './defined-academy-career-journey-where.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCareerJourneyUpdateWithoutStagesInput } from './defined-academy-career-journey-update-without-stages.input';

@InputType()
export class DefinedAcademyCareerJourneyUpdateToOneWithWhereWithoutStagesInput {

    @Field(() => DefinedAcademyCareerJourneyWhereInput, {nullable:true})
    @Type(() => DefinedAcademyCareerJourneyWhereInput)
    where?: DefinedAcademyCareerJourneyWhereInput;

    @Field(() => DefinedAcademyCareerJourneyUpdateWithoutStagesInput, {nullable:false})
    @Type(() => DefinedAcademyCareerJourneyUpdateWithoutStagesInput)
    data!: DefinedAcademyCareerJourneyUpdateWithoutStagesInput;
}
