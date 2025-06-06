import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LogAction } from './log-action.enum';

@InputType()
export class EnumLogActionFieldUpdateOperationsInput {

    @Field(() => LogAction, {nullable:true})
    set?: keyof typeof LogAction;
}
