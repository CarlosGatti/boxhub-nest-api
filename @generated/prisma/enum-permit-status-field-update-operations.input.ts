import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermitStatus } from './permit-status.enum';

@InputType()
export class EnumPermitStatusFieldUpdateOperationsInput {

    @Field(() => PermitStatus, {nullable:true})
    set?: keyof typeof PermitStatus;
}
