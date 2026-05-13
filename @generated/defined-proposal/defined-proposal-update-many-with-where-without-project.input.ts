import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedProposalScalarWhereInput } from './defined-proposal-scalar-where.input';
import { Type } from 'class-transformer';
import { DefinedProposalUpdateManyMutationInput } from './defined-proposal-update-many-mutation.input';

@InputType()
export class DefinedProposalUpdateManyWithWhereWithoutProjectInput {

    @Field(() => DefinedProposalScalarWhereInput, {nullable:false})
    @Type(() => DefinedProposalScalarWhereInput)
    where!: DefinedProposalScalarWhereInput;

    @Field(() => DefinedProposalUpdateManyMutationInput, {nullable:false})
    @Type(() => DefinedProposalUpdateManyMutationInput)
    data!: DefinedProposalUpdateManyMutationInput;
}
