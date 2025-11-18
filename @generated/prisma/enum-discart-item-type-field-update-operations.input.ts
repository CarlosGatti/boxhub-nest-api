import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DiscartItemType } from './discart-item-type.enum';

@InputType()
export class EnumDiscartItemTypeFieldUpdateOperationsInput {

    @Field(() => DiscartItemType, {nullable:true})
    set?: keyof typeof DiscartItemType;
}
