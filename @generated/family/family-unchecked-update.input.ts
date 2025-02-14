import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserUncheckedUpdateManyWithoutFamilyNestedInput } from '../user/user-unchecked-update-many-without-family-nested.input';
import { ContainerUncheckedUpdateManyWithoutFamilyNestedInput } from '../container/container-unchecked-update-many-without-family-nested.input';

@InputType()
export class FamilyUncheckedUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => UserUncheckedUpdateManyWithoutFamilyNestedInput, {nullable:true})
    members?: UserUncheckedUpdateManyWithoutFamilyNestedInput;

    @Field(() => ContainerUncheckedUpdateManyWithoutFamilyNestedInput, {nullable:true})
    containers?: ContainerUncheckedUpdateManyWithoutFamilyNestedInput;
}
