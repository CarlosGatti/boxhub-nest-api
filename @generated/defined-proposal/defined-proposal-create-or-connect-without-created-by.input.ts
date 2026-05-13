import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedProposalWhereUniqueInput } from './defined-proposal-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedProposalCreateWithoutCreatedByInput } from './defined-proposal-create-without-created-by.input';

@InputType()
export class DefinedProposalCreateOrConnectWithoutCreatedByInput {

    @Field(() => DefinedProposalWhereUniqueInput, {nullable:false})
    @Type(() => DefinedProposalWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedProposalWhereUniqueInput, 'id' | 'shareToken'>;

    @Field(() => DefinedProposalCreateWithoutCreatedByInput, {nullable:false})
    @Type(() => DefinedProposalCreateWithoutCreatedByInput)
    create!: DefinedProposalCreateWithoutCreatedByInput;
}
