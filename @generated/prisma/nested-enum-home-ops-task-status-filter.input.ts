import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeOpsTaskStatus } from './home-ops-task-status.enum';

@InputType()
export class NestedEnumHomeOpsTaskStatusFilter {

    @Field(() => HomeOpsTaskStatus, {nullable:true})
    equals?: keyof typeof HomeOpsTaskStatus;

    @Field(() => [HomeOpsTaskStatus], {nullable:true})
    in?: Array<keyof typeof HomeOpsTaskStatus>;

    @Field(() => [HomeOpsTaskStatus], {nullable:true})
    notIn?: Array<keyof typeof HomeOpsTaskStatus>;

    @Field(() => NestedEnumHomeOpsTaskStatusFilter, {nullable:true})
    not?: NestedEnumHomeOpsTaskStatusFilter;
}
