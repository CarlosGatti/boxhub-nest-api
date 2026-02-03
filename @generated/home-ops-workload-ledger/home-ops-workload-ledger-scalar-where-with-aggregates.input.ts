import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class HomeOpsWorkloadLedgerScalarWhereWithAggregatesInput {

    @Field(() => [HomeOpsWorkloadLedgerScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<HomeOpsWorkloadLedgerScalarWhereWithAggregatesInput>;

    @Field(() => [HomeOpsWorkloadLedgerScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<HomeOpsWorkloadLedgerScalarWhereWithAggregatesInput>;

    @Field(() => [HomeOpsWorkloadLedgerScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<HomeOpsWorkloadLedgerScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    householdId?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    userId?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    weekStart?: DateTimeWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    pointsCompleted?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    minutesCompleted?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    tasksCompleted?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
