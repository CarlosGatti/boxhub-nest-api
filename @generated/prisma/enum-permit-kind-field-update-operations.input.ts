import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermitKind } from './permit-kind.enum';

@InputType()
export class EnumPermitKindFieldUpdateOperationsInput {

    @Field(() => PermitKind, {nullable:true})
    set?: keyof typeof PermitKind;
}
