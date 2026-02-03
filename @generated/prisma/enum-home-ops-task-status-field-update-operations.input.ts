import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeOpsTaskStatus } from './home-ops-task-status.enum';

@InputType()
export class EnumHomeOpsTaskStatusFieldUpdateOperationsInput {

    @Field(() => HomeOpsTaskStatus, {nullable:true})
    set?: keyof typeof HomeOpsTaskStatus;
}
