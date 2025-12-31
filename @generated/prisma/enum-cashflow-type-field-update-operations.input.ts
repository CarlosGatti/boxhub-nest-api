import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CashflowType } from './cashflow-type.enum';

@InputType()
export class EnumCashflowTypeFieldUpdateOperationsInput {

    @Field(() => CashflowType, {nullable:true})
    set?: keyof typeof CashflowType;
}
