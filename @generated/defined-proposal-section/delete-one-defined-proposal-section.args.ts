import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedProposalSectionWhereUniqueInput } from './defined-proposal-section-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneDefinedProposalSectionArgs {

    @Field(() => DefinedProposalSectionWhereUniqueInput, {nullable:false})
    @Type(() => DefinedProposalSectionWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedProposalSectionWhereUniqueInput, 'id'>;
}
