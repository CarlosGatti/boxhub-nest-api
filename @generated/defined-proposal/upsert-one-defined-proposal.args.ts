import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedProposalWhereUniqueInput } from './defined-proposal-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedProposalCreateInput } from './defined-proposal-create.input';
import { DefinedProposalUpdateInput } from './defined-proposal-update.input';

@ArgsType()
export class UpsertOneDefinedProposalArgs {

    @Field(() => DefinedProposalWhereUniqueInput, {nullable:false})
    @Type(() => DefinedProposalWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedProposalWhereUniqueInput, 'id' | 'shareToken'>;

    @Field(() => DefinedProposalCreateInput, {nullable:false})
    @Type(() => DefinedProposalCreateInput)
    create!: DefinedProposalCreateInput;

    @Field(() => DefinedProposalUpdateInput, {nullable:false})
    @Type(() => DefinedProposalUpdateInput)
    update!: DefinedProposalUpdateInput;
}
