import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class HomeOpsWorkloadLedgerSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    householdId?: true;

    @Field(() => Boolean, {nullable:true})
    userId?: true;

    @Field(() => Boolean, {nullable:true})
    pointsCompleted?: true;

    @Field(() => Boolean, {nullable:true})
    minutesCompleted?: true;

    @Field(() => Boolean, {nullable:true})
    tasksCompleted?: true;
}
