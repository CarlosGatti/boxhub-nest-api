import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedProposalUpdateInput } from './defined-proposal-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { DefinedProposalWhereUniqueInput } from './defined-proposal-where-unique.input';

@ArgsType()
export class UpdateOneDefinedProposalArgs {

    @Field(() => DefinedProposalUpdateInput, {nullable:false})
    @Type(() => DefinedProposalUpdateInput)
    data!: DefinedProposalUpdateInput;

    @Field(() => DefinedProposalWhereUniqueInput, {nullable:false})
    @Type(() => DefinedProposalWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedProposalWhereUniqueInput, 'id' | 'shareToken'>;
}
