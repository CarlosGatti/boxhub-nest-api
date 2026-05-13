import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedProposalCreateInput } from './defined-proposal-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneDefinedProposalArgs {

    @Field(() => DefinedProposalCreateInput, {nullable:false})
    @Type(() => DefinedProposalCreateInput)
    data!: DefinedProposalCreateInput;
}
