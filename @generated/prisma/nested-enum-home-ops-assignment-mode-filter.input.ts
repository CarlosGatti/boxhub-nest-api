import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeOpsAssignmentMode } from './home-ops-assignment-mode.enum';

@InputType()
export class NestedEnumHomeOpsAssignmentModeFilter {

    @Field(() => HomeOpsAssignmentMode, {nullable:true})
    equals?: keyof typeof HomeOpsAssignmentMode;

    @Field(() => [HomeOpsAssignmentMode], {nullable:true})
    in?: Array<keyof typeof HomeOpsAssignmentMode>;

    @Field(() => [HomeOpsAssignmentMode], {nullable:true})
    notIn?: Array<keyof typeof HomeOpsAssignmentMode>;

    @Field(() => NestedEnumHomeOpsAssignmentModeFilter, {nullable:true})
    not?: NestedEnumHomeOpsAssignmentModeFilter;
}
