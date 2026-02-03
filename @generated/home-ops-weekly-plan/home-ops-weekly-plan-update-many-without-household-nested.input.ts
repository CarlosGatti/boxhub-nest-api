import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeOpsWeeklyPlanCreateWithoutHouseholdInput } from './home-ops-weekly-plan-create-without-household.input';
import { Type } from 'class-transformer';
import { HomeOpsWeeklyPlanCreateOrConnectWithoutHouseholdInput } from './home-ops-weekly-plan-create-or-connect-without-household.input';
import { HomeOpsWeeklyPlanUpsertWithWhereUniqueWithoutHouseholdInput } from './home-ops-weekly-plan-upsert-with-where-unique-without-household.input';
import { HomeOpsWeeklyPlanCreateManyHouseholdInputEnvelope } from './home-ops-weekly-plan-create-many-household-input-envelope.input';
import { Prisma } from '@prisma/client';
import { HomeOpsWeeklyPlanWhereUniqueInput } from './home-ops-weekly-plan-where-unique.input';
import { HomeOpsWeeklyPlanUpdateWithWhereUniqueWithoutHouseholdInput } from './home-ops-weekly-plan-update-with-where-unique-without-household.input';
import { HomeOpsWeeklyPlanUpdateManyWithWhereWithoutHouseholdInput } from './home-ops-weekly-plan-update-many-with-where-without-household.input';
import { HomeOpsWeeklyPlanScalarWhereInput } from './home-ops-weekly-plan-scalar-where.input';

@InputType()
export class HomeOpsWeeklyPlanUpdateManyWithoutHouseholdNestedInput {

    @Field(() => [HomeOpsWeeklyPlanCreateWithoutHouseholdInput], {nullable:true})
    @Type(() => HomeOpsWeeklyPlanCreateWithoutHouseholdInput)
    create?: Array<HomeOpsWeeklyPlanCreateWithoutHouseholdInput>;

    @Field(() => [HomeOpsWeeklyPlanCreateOrConnectWithoutHouseholdInput], {nullable:true})
    @Type(() => HomeOpsWeeklyPlanCreateOrConnectWithoutHouseholdInput)
    connectOrCreate?: Array<HomeOpsWeeklyPlanCreateOrConnectWithoutHouseholdInput>;

    @Field(() => [HomeOpsWeeklyPlanUpsertWithWhereUniqueWithoutHouseholdInput], {nullable:true})
    @Type(() => HomeOpsWeeklyPlanUpsertWithWhereUniqueWithoutHouseholdInput)
    upsert?: Array<HomeOpsWeeklyPlanUpsertWithWhereUniqueWithoutHouseholdInput>;

    @Field(() => HomeOpsWeeklyPlanCreateManyHouseholdInputEnvelope, {nullable:true})
    @Type(() => HomeOpsWeeklyPlanCreateManyHouseholdInputEnvelope)
    createMany?: HomeOpsWeeklyPlanCreateManyHouseholdInputEnvelope;

    @Field(() => [HomeOpsWeeklyPlanWhereUniqueInput], {nullable:true})
    @Type(() => HomeOpsWeeklyPlanWhereUniqueInput)
    set?: Array<Prisma.AtLeast<HomeOpsWeeklyPlanWhereUniqueInput, 'id' | 'householdId_weekStartDate'>>;

    @Field(() => [HomeOpsWeeklyPlanWhereUniqueInput], {nullable:true})
    @Type(() => HomeOpsWeeklyPlanWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<HomeOpsWeeklyPlanWhereUniqueInput, 'id' | 'householdId_weekStartDate'>>;

    @Field(() => [HomeOpsWeeklyPlanWhereUniqueInput], {nullable:true})
    @Type(() => HomeOpsWeeklyPlanWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<HomeOpsWeeklyPlanWhereUniqueInput, 'id' | 'householdId_weekStartDate'>>;

    @Field(() => [HomeOpsWeeklyPlanWhereUniqueInput], {nullable:true})
    @Type(() => HomeOpsWeeklyPlanWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<HomeOpsWeeklyPlanWhereUniqueInput, 'id' | 'householdId_weekStartDate'>>;

    @Field(() => [HomeOpsWeeklyPlanUpdateWithWhereUniqueWithoutHouseholdInput], {nullable:true})
    @Type(() => HomeOpsWeeklyPlanUpdateWithWhereUniqueWithoutHouseholdInput)
    update?: Array<HomeOpsWeeklyPlanUpdateWithWhereUniqueWithoutHouseholdInput>;

    @Field(() => [HomeOpsWeeklyPlanUpdateManyWithWhereWithoutHouseholdInput], {nullable:true})
    @Type(() => HomeOpsWeeklyPlanUpdateManyWithWhereWithoutHouseholdInput)
    updateMany?: Array<HomeOpsWeeklyPlanUpdateManyWithWhereWithoutHouseholdInput>;

    @Field(() => [HomeOpsWeeklyPlanScalarWhereInput], {nullable:true})
    @Type(() => HomeOpsWeeklyPlanScalarWhereInput)
    deleteMany?: Array<HomeOpsWeeklyPlanScalarWhereInput>;
}
