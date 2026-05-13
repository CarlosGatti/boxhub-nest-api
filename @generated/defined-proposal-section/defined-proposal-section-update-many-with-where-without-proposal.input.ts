import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedProposalSectionScalarWhereInput } from './defined-proposal-section-scalar-where.input';
import { Type } from 'class-transformer';
import { DefinedProposalSectionUpdateManyMutationInput } from './defined-proposal-section-update-many-mutation.input';

@InputType()
export class DefinedProposalSectionUpdateManyWithWhereWithoutProposalInput {

    @Field(() => DefinedProposalSectionScalarWhereInput, {nullable:false})
    @Type(() => DefinedProposalSectionScalarWhereInput)
    where!: DefinedProposalSectionScalarWhereInput;

    @Field(() => DefinedProposalSectionUpdateManyMutationInput, {nullable:false})
    @Type(() => DefinedProposalSectionUpdateManyMutationInput)
    data!: DefinedProposalSectionUpdateManyMutationInput;
}
