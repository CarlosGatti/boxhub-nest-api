import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeOpsWeeklyPlanStatus } from './home-ops-weekly-plan-status.enum';
import { NestedEnumHomeOpsWeeklyPlanStatusFilter } from './nested-enum-home-ops-weekly-plan-status-filter.input';

@InputType()
export class EnumHomeOpsWeeklyPlanStatusFilter {

    @Field(() => HomeOpsWeeklyPlanStatus, {nullable:true})
    equals?: keyof typeof HomeOpsWeeklyPlanStatus;

    @Field(() => [HomeOpsWeeklyPlanStatus], {nullable:true})
    in?: Array<keyof typeof HomeOpsWeeklyPlanStatus>;

    @Field(() => [HomeOpsWeeklyPlanStatus], {nullable:true})
    notIn?: Array<keyof typeof HomeOpsWeeklyPlanStatus>;

    @Field(() => NestedEnumHomeOpsWeeklyPlanStatusFilter, {nullable:true})
    not?: NestedEnumHomeOpsWeeklyPlanStatusFilter;
}
