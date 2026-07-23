import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyCareerJourneyCreateManyInput } from './defined-academy-career-journey-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyDefinedAcademyCareerJourneyArgs {

    @Field(() => [DefinedAcademyCareerJourneyCreateManyInput], {nullable:false})
    @Type(() => DefinedAcademyCareerJourneyCreateManyInput)
    data!: Array<DefinedAcademyCareerJourneyCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
