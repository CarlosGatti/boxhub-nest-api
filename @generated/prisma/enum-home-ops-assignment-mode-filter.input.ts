import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeOpsAssignmentMode } from './home-ops-assignment-mode.enum';
import { NestedEnumHomeOpsAssignmentModeFilter } from './nested-enum-home-ops-assignment-mode-filter.input';

@InputType()
export class EnumHomeOpsAssignmentModeFilter {

    @Field(() => HomeOpsAssignmentMode, {nullable:true})
    equals?: keyof typeof HomeOpsAssignmentMode;

    @Field(() => [HomeOpsAssignmentMode], {nullable:true})
    in?: Array<keyof typeof HomeOpsAssignmentMode>;

    @Field(() => [HomeOpsAssignmentMode], {nullable:true})
    notIn?: Array<keyof typeof HomeOpsAssignmentMode>;

    @Field(() => NestedEnumHomeOpsAssignmentModeFilter, {nullable:true})
    not?: NestedEnumHomeOpsAssignmentModeFilter;
}
