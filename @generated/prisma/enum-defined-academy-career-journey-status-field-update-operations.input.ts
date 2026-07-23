import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyCareerJourneyStatus } from './defined-academy-career-journey-status.enum';

@InputType()
export class EnumDefinedAcademyCareerJourneyStatusFieldUpdateOperationsInput {

    @Field(() => DefinedAcademyCareerJourneyStatus, {nullable:true})
    set?: keyof typeof DefinedAcademyCareerJourneyStatus;
}
