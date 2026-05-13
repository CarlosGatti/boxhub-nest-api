import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedProposalSectionWhereInput } from './defined-proposal-section-where.input';
import { Type } from 'class-transformer';
import { DefinedProposalSectionOrderByWithRelationInput } from './defined-proposal-section-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { DefinedProposalSectionWhereUniqueInput } from './defined-proposal-section-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DefinedProposalSectionScalarFieldEnum } from './defined-proposal-section-scalar-field.enum';

@ArgsType()
export class FindFirstDefinedProposalSectionArgs {

    @Field(() => DefinedProposalSectionWhereInput, {nullable:true})
    @Type(() => DefinedProposalSectionWhereInput)
    where?: DefinedProposalSectionWhereInput;

    @Field(() => [DefinedProposalSectionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DefinedProposalSectionOrderByWithRelationInput>;

    @Field(() => DefinedProposalSectionWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<DefinedProposalSectionWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [DefinedProposalSectionScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof DefinedProposalSectionScalarFieldEnum>;
}
