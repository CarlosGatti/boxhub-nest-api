import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeOpsTaskStatus } from './home-ops-task-status.enum';
import { NestedEnumHomeOpsTaskStatusFilter } from './nested-enum-home-ops-task-status-filter.input';

@InputType()
export class EnumHomeOpsTaskStatusFilter {

    @Field(() => HomeOpsTaskStatus, {nullable:true})
    equals?: keyof typeof HomeOpsTaskStatus;

    @Field(() => [HomeOpsTaskStatus], {nullable:true})
    in?: Array<keyof typeof HomeOpsTaskStatus>;

    @Field(() => [HomeOpsTaskStatus], {nullable:true})
    notIn?: Array<keyof typeof HomeOpsTaskStatus>;

    @Field(() => NestedEnumHomeOpsTaskStatusFilter, {nullable:true})
    not?: NestedEnumHomeOpsTaskStatusFilter;
}
