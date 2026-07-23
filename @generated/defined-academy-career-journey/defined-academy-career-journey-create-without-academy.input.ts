import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyCareerJourneyStatus } from '../prisma/defined-academy-career-journey-status.enum';
import { DefinedAcademyCareerStageCreateNestedManyWithoutJourneyInput } from '../defined-academy-career-stage/defined-academy-career-stage-create-nested-many-without-journey.input';
import { DefinedAcademyUserCareerProfileCreateNestedManyWithoutJourneyInput } from '../defined-academy-user-career-profile/defined-academy-user-career-profile-create-nested-many-without-journey.input';

@InputType()
export class DefinedAcademyCareerJourneyCreateWithoutAcademyInput {

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => DefinedAcademyCareerJourneyStatus, {nullable:true})
    status?: keyof typeof DefinedAcademyCareerJourneyStatus;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => DefinedAcademyCareerStageCreateNestedManyWithoutJourneyInput, {nullable:true})
    stages?: DefinedAcademyCareerStageCreateNestedManyWithoutJourneyInput;

    @Field(() => DefinedAcademyUserCareerProfileCreateNestedManyWithoutJourneyInput, {nullable:true})
    profiles?: DefinedAcademyUserCareerProfileCreateNestedManyWithoutJourneyInput;
}
