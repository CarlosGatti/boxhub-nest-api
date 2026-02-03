import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeOpsAssignmentMode } from './home-ops-assignment-mode.enum';

@InputType()
export class EnumHomeOpsAssignmentModeFieldUpdateOperationsInput {

    @Field(() => HomeOpsAssignmentMode, {nullable:true})
    set?: keyof typeof HomeOpsAssignmentMode;
}
