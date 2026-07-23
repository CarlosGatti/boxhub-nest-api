import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyCareerJourneyCreateInput } from './defined-academy-career-journey-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneDefinedAcademyCareerJourneyArgs {

    @Field(() => DefinedAcademyCareerJourneyCreateInput, {nullable:false})
    @Type(() => DefinedAcademyCareerJourneyCreateInput)
    data!: DefinedAcademyCareerJourneyCreateInput;
}
