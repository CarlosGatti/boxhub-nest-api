import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedProposalStatus } from './defined-proposal-status.enum';

@InputType()
export class EnumDefinedProposalStatusFieldUpdateOperationsInput {

    @Field(() => DefinedProposalStatus, {nullable:true})
    set?: keyof typeof DefinedProposalStatus;
}
