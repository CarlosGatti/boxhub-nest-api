import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyCareerStageCreateManyJourneyInput } from './defined-academy-career-stage-create-many-journey.input';
import { Type } from 'class-transformer';

@InputType()
export class DefinedAcademyCareerStageCreateManyJourneyInputEnvelope {

    @Field(() => [DefinedAcademyCareerStageCreateManyJourneyInput], {nullable:false})
    @Type(() => DefinedAcademyCareerStageCreateManyJourneyInput)
    data!: Array<DefinedAcademyCareerStageCreateManyJourneyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
