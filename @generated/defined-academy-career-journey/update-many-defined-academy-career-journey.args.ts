import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyCareerJourneyUpdateManyMutationInput } from './defined-academy-career-journey-update-many-mutation.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCareerJourneyWhereInput } from './defined-academy-career-journey-where.input';

@ArgsType()
export class UpdateManyDefinedAcademyCareerJourneyArgs {

    @Field(() => DefinedAcademyCareerJourneyUpdateManyMutationInput, {nullable:false})
    @Type(() => DefinedAcademyCareerJourneyUpdateManyMutationInput)
    data!: DefinedAcademyCareerJourneyUpdateManyMutationInput;

    @Field(() => DefinedAcademyCareerJourneyWhereInput, {nullable:true})
    @Type(() => DefinedAcademyCareerJourneyWhereInput)
    where?: DefinedAcademyCareerJourneyWhereInput;
}
