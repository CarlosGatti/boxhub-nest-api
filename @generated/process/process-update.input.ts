import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { ThemeUpdateManyWithoutProcessNestedInput } from '../theme/theme-update-many-without-process-nested.input';
import { PillarUpdateOneRequiredWithoutProcessesNestedInput } from '../pillar/pillar-update-one-required-without-processes-nested.input';

@InputType()
export class ProcessUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => ThemeUpdateManyWithoutProcessNestedInput, {nullable:true})
    themes?: ThemeUpdateManyWithoutProcessNestedInput;

    @Field(() => PillarUpdateOneRequiredWithoutProcessesNestedInput, {nullable:true})
    pillar?: PillarUpdateOneRequiredWithoutProcessesNestedInput;
}
