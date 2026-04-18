import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedIntakeFormStatus } from './defined-intake-form-status.enum';

@InputType()
export class EnumDefinedIntakeFormStatusFieldUpdateOperationsInput {

    @Field(() => DefinedIntakeFormStatus, {nullable:true})
    set?: keyof typeof DefinedIntakeFormStatus;
}
