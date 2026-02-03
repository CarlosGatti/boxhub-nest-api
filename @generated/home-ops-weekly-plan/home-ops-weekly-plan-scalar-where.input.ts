import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { EnumHomeOpsWeeklyPlanStatusFilter } from '../prisma/enum-home-ops-weekly-plan-status-filter.input';

@InputType()
export class HomeOpsWeeklyPlanScalarWhereInput {

    @Field(() => [HomeOpsWeeklyPlanScalarWhereInput], {nullable:true})
    AND?: Array<HomeOpsWeeklyPlanScalarWhereInput>;

    @Field(() => [HomeOpsWeeklyPlanScalarWhereInput], {nullable:true})
    OR?: Array<HomeOpsWeeklyPlanScalarWhereInput>;

    @Field(() => [HomeOpsWeeklyPlanScalarWhereInput], {nullable:true})
    NOT?: Array<HomeOpsWeeklyPlanScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    householdId?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    weekStartDate?: DateTimeFilter;

    @Field(() => EnumHomeOpsWeeklyPlanStatusFilter, {nullable:true})
    status?: EnumHomeOpsWeeklyPlanStatusFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
