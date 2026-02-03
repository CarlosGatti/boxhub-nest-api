import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { EnumHomeOpsWeeklyPlanStatusWithAggregatesFilter } from '../prisma/enum-home-ops-weekly-plan-status-with-aggregates-filter.input';

@InputType()
export class HomeOpsWeeklyPlanScalarWhereWithAggregatesInput {

    @Field(() => [HomeOpsWeeklyPlanScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<HomeOpsWeeklyPlanScalarWhereWithAggregatesInput>;

    @Field(() => [HomeOpsWeeklyPlanScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<HomeOpsWeeklyPlanScalarWhereWithAggregatesInput>;

    @Field(() => [HomeOpsWeeklyPlanScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<HomeOpsWeeklyPlanScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    householdId?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    weekStartDate?: DateTimeWithAggregatesFilter;

    @Field(() => EnumHomeOpsWeeklyPlanStatusWithAggregatesFilter, {nullable:true})
    status?: EnumHomeOpsWeeklyPlanStatusWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
