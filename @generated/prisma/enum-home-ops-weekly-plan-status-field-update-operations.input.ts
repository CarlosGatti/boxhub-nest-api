import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeOpsWeeklyPlanStatus } from './home-ops-weekly-plan-status.enum';

@InputType()
export class EnumHomeOpsWeeklyPlanStatusFieldUpdateOperationsInput {

    @Field(() => HomeOpsWeeklyPlanStatus, {nullable:true})
    set?: keyof typeof HomeOpsWeeklyPlanStatus;
}
