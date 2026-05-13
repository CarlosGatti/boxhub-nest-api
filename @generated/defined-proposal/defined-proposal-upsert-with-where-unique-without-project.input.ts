import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedProposalWhereUniqueInput } from './defined-proposal-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedProposalUpdateWithoutProjectInput } from './defined-proposal-update-without-project.input';
import { DefinedProposalCreateWithoutProjectInput } from './defined-proposal-create-without-project.input';

@InputType()
export class DefinedProposalUpsertWithWhereUniqueWithoutProjectInput {

    @Field(() => DefinedProposalWhereUniqueInput, {nullable:false})
    @Type(() => DefinedProposalWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedProposalWhereUniqueInput, 'id' | 'shareToken'>;

    @Field(() => DefinedProposalUpdateWithoutProjectInput, {nullable:false})
    @Type(() => DefinedProposalUpdateWithoutProjectInput)
    update!: DefinedProposalUpdateWithoutProjectInput;

    @Field(() => DefinedProposalCreateWithoutProjectInput, {nullable:false})
    @Type(() => DefinedProposalCreateWithoutProjectInput)
    create!: DefinedProposalCreateWithoutProjectInput;
}
