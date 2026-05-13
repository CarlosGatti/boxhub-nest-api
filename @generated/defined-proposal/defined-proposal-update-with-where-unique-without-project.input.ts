import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedProposalWhereUniqueInput } from './defined-proposal-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedProposalUpdateWithoutProjectInput } from './defined-proposal-update-without-project.input';

@InputType()
export class DefinedProposalUpdateWithWhereUniqueWithoutProjectInput {

    @Field(() => DefinedProposalWhereUniqueInput, {nullable:false})
    @Type(() => DefinedProposalWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedProposalWhereUniqueInput, 'id' | 'shareToken'>;

    @Field(() => DefinedProposalUpdateWithoutProjectInput, {nullable:false})
    @Type(() => DefinedProposalUpdateWithoutProjectInput)
    data!: DefinedProposalUpdateWithoutProjectInput;
}
