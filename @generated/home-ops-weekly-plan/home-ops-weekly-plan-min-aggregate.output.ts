import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HomeOpsWeeklyPlanStatus } from '../prisma/home-ops-weekly-plan-status.enum';

@ObjectType()
export class HomeOpsWeeklyPlanMinAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    householdId?: number;

    @Field(() => Date, {nullable:true})
    weekStartDate?: Date | string;

    @Field(() => HomeOpsWeeklyPlanStatus, {nullable:true})
    status?: keyof typeof HomeOpsWeeklyPlanStatus;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
