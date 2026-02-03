import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnumHouseholdRoleFieldUpdateOperationsInput } from '../prisma/enum-household-role-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { HomeOpsHouseholdUpdateOneRequiredWithoutMembersNestedInput } from '../home-ops-household/home-ops-household-update-one-required-without-members-nested.input';

@InputType()
export class HomeOpsHouseholdMemberUpdateWithoutUserInput {

    @Field(() => EnumHouseholdRoleFieldUpdateOperationsInput, {nullable:true})
    role?: EnumHouseholdRoleFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    joinedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => HomeOpsHouseholdUpdateOneRequiredWithoutMembersNestedInput, {nullable:true})
    household?: HomeOpsHouseholdUpdateOneRequiredWithoutMembersNestedInput;
}
