import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeOpsWeeklyPlanStatus } from './home-ops-weekly-plan-status.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumHomeOpsWeeklyPlanStatusFilter } from './nested-enum-home-ops-weekly-plan-status-filter.input';

@InputType()
export class NestedEnumHomeOpsWeeklyPlanStatusWithAggregatesFilter {

    @Field(() => HomeOpsWeeklyPlanStatus, {nullable:true})
    equals?: keyof typeof HomeOpsWeeklyPlanStatus;

    @Field(() => [HomeOpsWeeklyPlanStatus], {nullable:true})
    in?: Array<keyof typeof HomeOpsWeeklyPlanStatus>;

    @Field(() => [HomeOpsWeeklyPlanStatus], {nullable:true})
    notIn?: Array<keyof typeof HomeOpsWeeklyPlanStatus>;

    @Field(() => NestedEnumHomeOpsWeeklyPlanStatusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumHomeOpsWeeklyPlanStatusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumHomeOpsWeeklyPlanStatusFilter, {nullable:true})
    _min?: NestedEnumHomeOpsWeeklyPlanStatusFilter;

    @Field(() => NestedEnumHomeOpsWeeklyPlanStatusFilter, {nullable:true})
    _max?: NestedEnumHomeOpsWeeklyPlanStatusFilter;
}
