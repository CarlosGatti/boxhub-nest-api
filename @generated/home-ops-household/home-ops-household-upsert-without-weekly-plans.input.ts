import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeOpsHouseholdUpdateWithoutWeeklyPlansInput } from './home-ops-household-update-without-weekly-plans.input';
import { Type } from 'class-transformer';
import { HomeOpsHouseholdCreateWithoutWeeklyPlansInput } from './home-ops-household-create-without-weekly-plans.input';
import { HomeOpsHouseholdWhereInput } from './home-ops-household-where.input';

@InputType()
export class HomeOpsHouseholdUpsertWithoutWeeklyPlansInput {

    @Field(() => HomeOpsHouseholdUpdateWithoutWeeklyPlansInput, {nullable:false})
    @Type(() => HomeOpsHouseholdUpdateWithoutWeeklyPlansInput)
    update!: HomeOpsHouseholdUpdateWithoutWeeklyPlansInput;

    @Field(() => HomeOpsHouseholdCreateWithoutWeeklyPlansInput, {nullable:false})
    @Type(() => HomeOpsHouseholdCreateWithoutWeeklyPlansInput)
    create!: HomeOpsHouseholdCreateWithoutWeeklyPlansInput;

    @Field(() => HomeOpsHouseholdWhereInput, {nullable:true})
    @Type(() => HomeOpsHouseholdWhereInput)
    where?: HomeOpsHouseholdWhereInput;
}
