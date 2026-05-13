import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedProposalWhereUniqueInput } from './defined-proposal-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedProposalUpdateWithoutClientInput } from './defined-proposal-update-without-client.input';

@InputType()
export class DefinedProposalUpdateWithWhereUniqueWithoutClientInput {

    @Field(() => DefinedProposalWhereUniqueInput, {nullable:false})
    @Type(() => DefinedProposalWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedProposalWhereUniqueInput, 'id' | 'shareToken'>;

    @Field(() => DefinedProposalUpdateWithoutClientInput, {nullable:false})
    @Type(() => DefinedProposalUpdateWithoutClientInput)
    data!: DefinedProposalUpdateWithoutClientInput;
}
