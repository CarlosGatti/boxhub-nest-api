import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedProposalSectionWhereUniqueInput } from './defined-proposal-section-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedProposalSectionCreateWithoutProposalInput } from './defined-proposal-section-create-without-proposal.input';

@InputType()
export class DefinedProposalSectionCreateOrConnectWithoutProposalInput {

    @Field(() => DefinedProposalSectionWhereUniqueInput, {nullable:false})
    @Type(() => DefinedProposalSectionWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedProposalSectionWhereUniqueInput, 'id'>;

    @Field(() => DefinedProposalSectionCreateWithoutProposalInput, {nullable:false})
    @Type(() => DefinedProposalSectionCreateWithoutProposalInput)
    create!: DefinedProposalSectionCreateWithoutProposalInput;
}
