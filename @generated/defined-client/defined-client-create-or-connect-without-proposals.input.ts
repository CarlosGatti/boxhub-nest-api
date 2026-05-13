import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedClientWhereUniqueInput } from './defined-client-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedClientCreateWithoutProposalsInput } from './defined-client-create-without-proposals.input';

@InputType()
export class DefinedClientCreateOrConnectWithoutProposalsInput {

    @Field(() => DefinedClientWhereUniqueInput, {nullable:false})
    @Type(() => DefinedClientWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedClientWhereUniqueInput, 'id'>;

    @Field(() => DefinedClientCreateWithoutProposalsInput, {nullable:false})
    @Type(() => DefinedClientCreateWithoutProposalsInput)
    create!: DefinedClientCreateWithoutProposalsInput;
}
