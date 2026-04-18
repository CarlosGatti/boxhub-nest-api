import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedIntakeFormType } from './defined-intake-form-type.enum';

@InputType()
export class EnumDefinedIntakeFormTypeFieldUpdateOperationsInput {

    @Field(() => DefinedIntakeFormType, {nullable:true})
    set?: keyof typeof DefinedIntakeFormType;
}
