import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeOpsHouseholdCreateWithoutWeeklyPlansInput } from './home-ops-household-create-without-weekly-plans.input';
import { Type } from 'class-transformer';
import { HomeOpsHouseholdCreateOrConnectWithoutWeeklyPlansInput } from './home-ops-household-create-or-connect-without-weekly-plans.input';
import { HomeOpsHouseholdUpsertWithoutWeeklyPlansInput } from './home-ops-household-upsert-without-weekly-plans.input';
import { Prisma } from '@prisma/client';
import { HomeOpsHouseholdWhereUniqueInput } from './home-ops-household-where-unique.input';
import { HomeOpsHouseholdUpdateToOneWithWhereWithoutWeeklyPlansInput } from './home-ops-household-update-to-one-with-where-without-weekly-plans.input';

@InputType()
export class HomeOpsHouseholdUpdateOneRequiredWithoutWeeklyPlansNestedInput {

    @Field(() => HomeOpsHouseholdCreateWithoutWeeklyPlansInput, {nullable:true})
    @Type(() => HomeOpsHouseholdCreateWithoutWeeklyPlansInput)
    create?: HomeOpsHouseholdCreateWithoutWeeklyPlansInput;

    @Field(() => HomeOpsHouseholdCreateOrConnectWithoutWeeklyPlansInput, {nullable:true})
    @Type(() => HomeOpsHouseholdCreateOrConnectWithoutWeeklyPlansInput)
    connectOrCreate?: HomeOpsHouseholdCreateOrConnectWithoutWeeklyPlansInput;

    @Field(() => HomeOpsHouseholdUpsertWithoutWeeklyPlansInput, {nullable:true})
    @Type(() => HomeOpsHouseholdUpsertWithoutWeeklyPlansInput)
    upsert?: HomeOpsHouseholdUpsertWithoutWeeklyPlansInput;

    @Field(() => HomeOpsHouseholdWhereUniqueInput, {nullable:true})
    @Type(() => HomeOpsHouseholdWhereUniqueInput)
    connect?: Prisma.AtLeast<HomeOpsHouseholdWhereUniqueInput, 'id'>;

    @Field(() => HomeOpsHouseholdUpdateToOneWithWhereWithoutWeeklyPlansInput, {nullable:true})
    @Type(() => HomeOpsHouseholdUpdateToOneWithWhereWithoutWeeklyPlansInput)
    update?: HomeOpsHouseholdUpdateToOneWithWhereWithoutWeeklyPlansInput;
}
