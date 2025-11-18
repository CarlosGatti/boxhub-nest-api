import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DiscartItemCondition } from './discart-item-condition.enum';

@InputType()
export class EnumDiscartItemConditionFieldUpdateOperationsInput {

    @Field(() => DiscartItemCondition, {nullable:true})
    set?: keyof typeof DiscartItemCondition;
}
