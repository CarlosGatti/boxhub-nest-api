import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LogType } from './log-type.enum';

@InputType()
export class EnumLogTypeFieldUpdateOperationsInput {

    @Field(() => LogType, {nullable:true})
    set?: keyof typeof LogType;
}
