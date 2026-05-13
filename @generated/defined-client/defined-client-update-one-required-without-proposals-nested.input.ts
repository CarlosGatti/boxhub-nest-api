import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedClientCreateWithoutProposalsInput } from './defined-client-create-without-proposals.input';
import { Type } from 'class-transformer';
import { DefinedClientCreateOrConnectWithoutProposalsInput } from './defined-client-create-or-connect-without-proposals.input';
import { DefinedClientUpsertWithoutProposalsInput } from './defined-client-upsert-without-proposals.input';
import { Prisma } from '@prisma/client';
import { DefinedClientWhereUniqueInput } from './defined-client-where-unique.input';
import { DefinedClientUpdateToOneWithWhereWithoutProposalsInput } from './defined-client-update-to-one-with-where-without-proposals.input';

@InputType()
export class DefinedClientUpdateOneRequiredWithoutProposalsNestedInput {

    @Field(() => DefinedClientCreateWithoutProposalsInput, {nullable:true})
    @Type(() => DefinedClientCreateWithoutProposalsInput)
    create?: DefinedClientCreateWithoutProposalsInput;

    @Field(() => DefinedClientCreateOrConnectWithoutProposalsInput, {nullable:true})
    @Type(() => DefinedClientCreateOrConnectWithoutProposalsInput)
    connectOrCreate?: DefinedClientCreateOrConnectWithoutProposalsInput;

    @Field(() => DefinedClientUpsertWithoutProposalsInput, {nullable:true})
    @Type(() => DefinedClientUpsertWithoutProposalsInput)
    upsert?: DefinedClientUpsertWithoutProposalsInput;

    @Field(() => DefinedClientWhereUniqueInput, {nullable:true})
    @Type(() => DefinedClientWhereUniqueInput)
    connect?: Prisma.AtLeast<DefinedClientWhereUniqueInput, 'id'>;

    @Field(() => DefinedClientUpdateToOneWithWhereWithoutProposalsInput, {nullable:true})
    @Type(() => DefinedClientUpdateToOneWithWhereWithoutProposalsInput)
    update?: DefinedClientUpdateToOneWithWhereWithoutProposalsInput;
}
