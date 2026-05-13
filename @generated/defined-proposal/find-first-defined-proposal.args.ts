import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedProposalWhereInput } from './defined-proposal-where.input';
import { Type } from 'class-transformer';
import { DefinedProposalOrderByWithRelationInput } from './defined-proposal-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { DefinedProposalWhereUniqueInput } from './defined-proposal-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DefinedProposalScalarFieldEnum } from './defined-proposal-scalar-field.enum';

@ArgsType()
export class FindFirstDefinedProposalArgs {

    @Field(() => DefinedProposalWhereInput, {nullable:true})
    @Type(() => DefinedProposalWhereInput)
    where?: DefinedProposalWhereInput;

    @Field(() => [DefinedProposalOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DefinedProposalOrderByWithRelationInput>;

    @Field(() => DefinedProposalWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<DefinedProposalWhereUniqueInput, 'id' | 'shareToken'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [DefinedProposalScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof DefinedProposalScalarFieldEnum>;
}
