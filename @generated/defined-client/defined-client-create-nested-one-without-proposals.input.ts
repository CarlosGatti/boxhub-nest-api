import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedClientCreateWithoutProposalsInput } from './defined-client-create-without-proposals.input';
import { Type } from 'class-transformer';
import { DefinedClientCreateOrConnectWithoutProposalsInput } from './defined-client-create-or-connect-without-proposals.input';
import { Prisma } from '@prisma/client';
import { DefinedClientWhereUniqueInput } from './defined-client-where-unique.input';

@InputType()
export class DefinedClientCreateNestedOneWithoutProposalsInput {

    @Field(() => DefinedClientCreateWithoutProposalsInput, {nullable:true})
    @Type(() => DefinedClientCreateWithoutProposalsInput)
    create?: DefinedClientCreateWithoutProposalsInput;

    @Field(() => DefinedClientCreateOrConnectWithoutProposalsInput, {nullable:true})
    @Type(() => DefinedClientCreateOrConnectWithoutProposalsInput)
    connectOrCreate?: DefinedClientCreateOrConnectWithoutProposalsInput;

    @Field(() => DefinedClientWhereUniqueInput, {nullable:true})
    @Type(() => DefinedClientWhereUniqueInput)
    connect?: Prisma.AtLeast<DefinedClientWhereUniqueInput, 'id'>;
}
