import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedProposalWhereUniqueInput } from './defined-proposal-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedProposalCreateWithoutClientInput } from './defined-proposal-create-without-client.input';

@InputType()
export class DefinedProposalCreateOrConnectWithoutClientInput {

    @Field(() => DefinedProposalWhereUniqueInput, {nullable:false})
    @Type(() => DefinedProposalWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedProposalWhereUniqueInput, 'id' | 'shareToken'>;

    @Field(() => DefinedProposalCreateWithoutClientInput, {nullable:false})
    @Type(() => DefinedProposalCreateWithoutClientInput)
    create!: DefinedProposalCreateWithoutClientInput;
}
