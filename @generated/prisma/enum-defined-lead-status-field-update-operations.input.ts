import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedLeadStatus } from './defined-lead-status.enum';

@InputType()
export class EnumDefinedLeadStatusFieldUpdateOperationsInput {

    @Field(() => DefinedLeadStatus, {nullable:true})
    set?: keyof typeof DefinedLeadStatus;
}
