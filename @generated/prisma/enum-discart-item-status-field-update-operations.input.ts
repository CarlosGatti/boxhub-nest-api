import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DiscartItemStatus } from './discart-item-status.enum';

@InputType()
export class EnumDiscartItemStatusFieldUpdateOperationsInput {

    @Field(() => DiscartItemStatus, {nullable:true})
    set?: keyof typeof DiscartItemStatus;
}
