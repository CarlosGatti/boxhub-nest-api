import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyCareerJourneyStatus } from '../prisma/defined-academy-career-journey-status.enum';
import { DefinedAcademyCreateNestedOneWithoutCareerJourneyInput } from '../defined-academy/defined-academy-create-nested-one-without-career-journey.input';
import { DefinedAcademyUserCareerProfileCreateNestedManyWithoutJourneyInput } from '../defined-academy-user-career-profile/defined-academy-user-career-profile-create-nested-many-without-journey.input';

@InputType()
export class DefinedAcademyCareerJourneyCreateWithoutStagesInput {

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

    @Field(() => DefinedAcademyCreateNestedOneWithoutCareerJourneyInput, {nullable:false})
    academy!: DefinedAcademyCreateNestedOneWithoutCareerJourneyInput;

    @Field(() => DefinedAcademyUserCareerProfileCreateNestedManyWithoutJourneyInput, {nullable:true})
    profiles?: DefinedAcademyUserCareerProfileCreateNestedManyWithoutJourneyInput;
}
