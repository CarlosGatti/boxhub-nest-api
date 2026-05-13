import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedProposalSectionUpdateManyMutationInput } from './defined-proposal-section-update-many-mutation.input';
import { Type } from 'class-transformer';
import { DefinedProposalSectionWhereInput } from './defined-proposal-section-where.input';

@ArgsType()
export class UpdateManyDefinedProposalSectionArgs {

    @Field(() => DefinedProposalSectionUpdateManyMutationInput, {nullable:false})
    @Type(() => DefinedProposalSectionUpdateManyMutationInput)
    data!: DefinedProposalSectionUpdateManyMutationInput;

    @Field(() => DefinedProposalSectionWhereInput, {nullable:true})
    @Type(() => DefinedProposalSectionWhereInput)
    where?: DefinedProposalSectionWhereInput;
}
