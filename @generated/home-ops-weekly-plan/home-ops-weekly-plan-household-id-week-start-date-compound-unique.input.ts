import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class HomeOpsWeeklyPlanHouseholdIdWeekStartDateCompoundUniqueInput {

    @Field(() => Int, {nullable:false})
    householdId!: number;

    @Field(() => Date, {nullable:false})
    weekStartDate!: Date | string;
}
