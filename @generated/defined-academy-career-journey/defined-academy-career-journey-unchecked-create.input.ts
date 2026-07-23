import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyCareerJourneyStatus } from '../prisma/defined-academy-career-journey-status.enum';
import { DefinedAcademyCareerStageUncheckedCreateNestedManyWithoutJourneyInput } from '../defined-academy-career-stage/defined-academy-career-stage-unchecked-create-nested-many-without-journey.input';
import { DefinedAcademyUserCareerProfileUncheckedCreateNestedManyWithoutJourneyInput } from '../defined-academy-user-career-profile/defined-academy-user-career-profile-unchecked-create-nested-many-without-journey.input';

@InputType()
export class DefinedAcademyCareerJourneyUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:false})
    academyId!: number;

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

    @Field(() => DefinedAcademyCareerStageUncheckedCreateNestedManyWithoutJourneyInput, {nullable:true})
    stages?: DefinedAcademyCareerStageUncheckedCreateNestedManyWithoutJourneyInput;

    @Field(() => DefinedAcademyUserCareerProfileUncheckedCreateNestedManyWithoutJourneyInput, {nullable:true})
    profiles?: DefinedAcademyUserCareerProfileUncheckedCreateNestedManyWithoutJourneyInput;
}
