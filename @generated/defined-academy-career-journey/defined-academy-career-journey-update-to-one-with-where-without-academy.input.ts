import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyCareerJourneyWhereInput } from './defined-academy-career-journey-where.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCareerJourneyUpdateWithoutAcademyInput } from './defined-academy-career-journey-update-without-academy.input';

@InputType()
export class DefinedAcademyCareerJourneyUpdateToOneWithWhereWithoutAcademyInput {

    @Field(() => DefinedAcademyCareerJourneyWhereInput, {nullable:true})
    @Type(() => DefinedAcademyCareerJourneyWhereInput)
    where?: DefinedAcademyCareerJourneyWhereInput;

    @Field(() => DefinedAcademyCareerJourneyUpdateWithoutAcademyInput, {nullable:false})
    @Type(() => DefinedAcademyCareerJourneyUpdateWithoutAcademyInput)
    data!: DefinedAcademyCareerJourneyUpdateWithoutAcademyInput;
}
