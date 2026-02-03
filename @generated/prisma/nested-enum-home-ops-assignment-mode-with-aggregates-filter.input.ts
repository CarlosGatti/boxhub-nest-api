import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeOpsAssignmentMode } from './home-ops-assignment-mode.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumHomeOpsAssignmentModeFilter } from './nested-enum-home-ops-assignment-mode-filter.input';

@InputType()
export class NestedEnumHomeOpsAssignmentModeWithAggregatesFilter {

    @Field(() => HomeOpsAssignmentMode, {nullable:true})
    equals?: keyof typeof HomeOpsAssignmentMode;

    @Field(() => [HomeOpsAssignmentMode], {nullable:true})
    in?: Array<keyof typeof HomeOpsAssignmentMode>;

    @Field(() => [HomeOpsAssignmentMode], {nullable:true})
    notIn?: Array<keyof typeof HomeOpsAssignmentMode>;

    @Field(() => NestedEnumHomeOpsAssignmentModeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumHomeOpsAssignmentModeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumHomeOpsAssignmentModeFilter, {nullable:true})
    _min?: NestedEnumHomeOpsAssignmentModeFilter;

    @Field(() => NestedEnumHomeOpsAssignmentModeFilter, {nullable:true})
    _max?: NestedEnumHomeOpsAssignmentModeFilter;
}
