import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedProposalSectionType } from './defined-proposal-section-type.enum';

@InputType()
export class EnumDefinedProposalSectionTypeFieldUpdateOperationsInput {

    @Field(() => DefinedProposalSectionType, {nullable:true})
    set?: keyof typeof DefinedProposalSectionType;
}
