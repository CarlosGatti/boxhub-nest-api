import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeOpsWeeklyPlanCreateWithoutHouseholdInput } from './home-ops-weekly-plan-create-without-household.input';
import { Type } from 'class-transformer';
import { HomeOpsWeeklyPlanCreateOrConnectWithoutHouseholdInput } from './home-ops-weekly-plan-create-or-connect-without-household.input';
import { HomeOpsWeeklyPlanCreateManyHouseholdInputEnvelope } from './home-ops-weekly-plan-create-many-household-input-envelope.input';
import { Prisma } from '@prisma/client';
import { HomeOpsWeeklyPlanWhereUniqueInput } from './home-ops-weekly-plan-where-unique.input';

@InputType()
export class HomeOpsWeeklyPlanCreateNestedManyWithoutHouseholdInput {

    @Field(() => [HomeOpsWeeklyPlanCreateWithoutHouseholdInput], {nullable:true})
    @Type(() => HomeOpsWeeklyPlanCreateWithoutHouseholdInput)
    create?: Array<HomeOpsWeeklyPlanCreateWithoutHouseholdInput>;

    @Field(() => [HomeOpsWeeklyPlanCreateOrConnectWithoutHouseholdInput], {nullable:true})
    @Type(() => HomeOpsWeeklyPlanCreateOrConnectWithoutHouseholdInput)
    connectOrCreate?: Array<HomeOpsWeeklyPlanCreateOrConnectWithoutHouseholdInput>;

    @Field(() => HomeOpsWeeklyPlanCreateManyHouseholdInputEnvelope, {nullable:true})
    @Type(() => HomeOpsWeeklyPlanCreateManyHouseholdInputEnvelope)
    createMany?: HomeOpsWeeklyPlanCreateManyHouseholdInputEnvelope;

    @Field(() => [HomeOpsWeeklyPlanWhereUniqueInput], {nullable:true})
    @Type(() => HomeOpsWeeklyPlanWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<HomeOpsWeeklyPlanWhereUniqueInput, 'id' | 'householdId_weekStartDate'>>;
}
