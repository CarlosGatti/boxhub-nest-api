import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HomeOpsWeeklyPlanStatus } from '../prisma/home-ops-weekly-plan-status.enum';

@InputType()
export class HomeOpsWeeklyPlanCreateManyInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:false})
    householdId!: number;

    @Field(() => Date, {nullable:false})
    weekStartDate!: Date | string;

    @Field(() => HomeOpsWeeklyPlanStatus, {nullable:true})
    status?: keyof typeof HomeOpsWeeklyPlanStatus;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
