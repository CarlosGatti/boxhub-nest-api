import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeOpsHouseholdCreateWithoutWeeklyPlansInput } from './home-ops-household-create-without-weekly-plans.input';
import { Type } from 'class-transformer';
import { HomeOpsHouseholdCreateOrConnectWithoutWeeklyPlansInput } from './home-ops-household-create-or-connect-without-weekly-plans.input';
import { Prisma } from '@prisma/client';
import { HomeOpsHouseholdWhereUniqueInput } from './home-ops-household-where-unique.input';

@InputType()
export class HomeOpsHouseholdCreateNestedOneWithoutWeeklyPlansInput {

    @Field(() => HomeOpsHouseholdCreateWithoutWeeklyPlansInput, {nullable:true})
    @Type(() => HomeOpsHouseholdCreateWithoutWeeklyPlansInput)
    create?: HomeOpsHouseholdCreateWithoutWeeklyPlansInput;

    @Field(() => HomeOpsHouseholdCreateOrConnectWithoutWeeklyPlansInput, {nullable:true})
    @Type(() => HomeOpsHouseholdCreateOrConnectWithoutWeeklyPlansInput)
    connectOrCreate?: HomeOpsHouseholdCreateOrConnectWithoutWeeklyPlansInput;

    @Field(() => HomeOpsHouseholdWhereUniqueInput, {nullable:true})
    @Type(() => HomeOpsHouseholdWhereUniqueInput)
    connect?: Prisma.AtLeast<HomeOpsHouseholdWhereUniqueInput, 'id'>;
}
