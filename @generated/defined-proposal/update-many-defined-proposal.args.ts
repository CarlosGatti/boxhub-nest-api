import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedProposalUpdateManyMutationInput } from './defined-proposal-update-many-mutation.input';
import { Type } from 'class-transformer';
import { DefinedProposalWhereInput } from './defined-proposal-where.input';

@ArgsType()
export class UpdateManyDefinedProposalArgs {

    @Field(() => DefinedProposalUpdateManyMutationInput, {nullable:false})
    @Type(() => DefinedProposalUpdateManyMutationInput)
    data!: DefinedProposalUpdateManyMutationInput;

    @Field(() => DefinedProposalWhereInput, {nullable:true})
    @Type(() => DefinedProposalWhereInput)
    where?: DefinedProposalWhereInput;
}
