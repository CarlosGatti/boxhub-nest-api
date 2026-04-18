import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedIntakeAnswerType } from './defined-intake-answer-type.enum';

@InputType()
export class EnumDefinedIntakeAnswerTypeFieldUpdateOperationsInput {

    @Field(() => DefinedIntakeAnswerType, {nullable:true})
    set?: keyof typeof DefinedIntakeAnswerType;
}
