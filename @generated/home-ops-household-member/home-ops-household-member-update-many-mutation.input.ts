import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnumHouseholdRoleFieldUpdateOperationsInput } from '../prisma/enum-household-role-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class HomeOpsHouseholdMemberUpdateManyMutationInput {

    @Field(() => EnumHouseholdRoleFieldUpdateOperationsInput, {nullable:true})
    role?: EnumHouseholdRoleFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    joinedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
