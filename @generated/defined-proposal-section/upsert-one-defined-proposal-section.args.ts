import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedProposalSectionWhereUniqueInput } from './defined-proposal-section-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedProposalSectionCreateInput } from './defined-proposal-section-create.input';
import { DefinedProposalSectionUpdateInput } from './defined-proposal-section-update.input';

@ArgsType()
export class UpsertOneDefinedProposalSectionArgs {

    @Field(() => DefinedProposalSectionWhereUniqueInput, {nullable:false})
    @Type(() => DefinedProposalSectionWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedProposalSectionWhereUniqueInput, 'id'>;

    @Field(() => DefinedProposalSectionCreateInput, {nullable:false})
    @Type(() => DefinedProposalSectionCreateInput)
    create!: DefinedProposalSectionCreateInput;

    @Field(() => DefinedProposalSectionUpdateInput, {nullable:false})
    @Type(() => DefinedProposalSectionUpdateInput)
    update!: DefinedProposalSectionUpdateInput;
}
