import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeOpsTaskStatus } from './home-ops-task-status.enum';
import { NestedEnumHomeOpsTaskStatusWithAggregatesFilter } from './nested-enum-home-ops-task-status-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumHomeOpsTaskStatusFilter } from './nested-enum-home-ops-task-status-filter.input';

@InputType()
export class EnumHomeOpsTaskStatusWithAggregatesFilter {

    @Field(() => HomeOpsTaskStatus, {nullable:true})
    equals?: keyof typeof HomeOpsTaskStatus;

    @Field(() => [HomeOpsTaskStatus], {nullable:true})
    in?: Array<keyof typeof HomeOpsTaskStatus>;

    @Field(() => [HomeOpsTaskStatus], {nullable:true})
    notIn?: Array<keyof typeof HomeOpsTaskStatus>;

    @Field(() => NestedEnumHomeOpsTaskStatusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumHomeOpsTaskStatusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumHomeOpsTaskStatusFilter, {nullable:true})
    _min?: NestedEnumHomeOpsTaskStatusFilter;

    @Field(() => NestedEnumHomeOpsTaskStatusFilter, {nullable:true})
    _max?: NestedEnumHomeOpsTaskStatusFilter;
}
