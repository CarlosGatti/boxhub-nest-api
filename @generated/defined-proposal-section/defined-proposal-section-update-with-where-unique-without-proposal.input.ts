import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedProposalSectionWhereUniqueInput } from './defined-proposal-section-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedProposalSectionUpdateWithoutProposalInput } from './defined-proposal-section-update-without-proposal.input';

@InputType()
export class DefinedProposalSectionUpdateWithWhereUniqueWithoutProposalInput {

    @Field(() => DefinedProposalSectionWhereUniqueInput, {nullable:false})
    @Type(() => DefinedProposalSectionWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedProposalSectionWhereUniqueInput, 'id'>;

    @Field(() => DefinedProposalSectionUpdateWithoutProposalInput, {nullable:false})
    @Type(() => DefinedProposalSectionUpdateWithoutProposalInput)
    data!: DefinedProposalSectionUpdateWithoutProposalInput;
}
