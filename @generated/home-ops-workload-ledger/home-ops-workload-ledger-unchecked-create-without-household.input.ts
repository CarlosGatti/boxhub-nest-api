import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class HomeOpsWorkloadLedgerUncheckedCreateWithoutHouseholdInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Date, {nullable:false})
    weekStart!: Date | string;

    @Field(() => Int, {nullable:true})
    pointsCompleted?: number;

    @Field(() => Int, {nullable:true})
    minutesCompleted?: number;

    @Field(() => Int, {nullable:true})
    tasksCompleted?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
