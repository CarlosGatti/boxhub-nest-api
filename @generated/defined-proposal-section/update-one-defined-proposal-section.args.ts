import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedProposalSectionUpdateInput } from './defined-proposal-section-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { DefinedProposalSectionWhereUniqueInput } from './defined-proposal-section-where-unique.input';

@ArgsType()
export class UpdateOneDefinedProposalSectionArgs {

    @Field(() => DefinedProposalSectionUpdateInput, {nullable:false})
    @Type(() => DefinedProposalSectionUpdateInput)
    data!: DefinedProposalSectionUpdateInput;

    @Field(() => DefinedProposalSectionWhereUniqueInput, {nullable:false})
    @Type(() => DefinedProposalSectionWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedProposalSectionWhereUniqueInput, 'id'>;
}
