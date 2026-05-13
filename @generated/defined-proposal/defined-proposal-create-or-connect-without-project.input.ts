import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedProposalWhereUniqueInput } from './defined-proposal-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedProposalCreateWithoutProjectInput } from './defined-proposal-create-without-project.input';

@InputType()
export class DefinedProposalCreateOrConnectWithoutProjectInput {

    @Field(() => DefinedProposalWhereUniqueInput, {nullable:false})
    @Type(() => DefinedProposalWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedProposalWhereUniqueInput, 'id' | 'shareToken'>;

    @Field(() => DefinedProposalCreateWithoutProjectInput, {nullable:false})
    @Type(() => DefinedProposalCreateWithoutProjectInput)
    create!: DefinedProposalCreateWithoutProjectInput;
}
