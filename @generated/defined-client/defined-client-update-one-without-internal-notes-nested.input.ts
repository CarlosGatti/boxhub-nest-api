import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedClientCreateWithoutInternalNotesInput } from './defined-client-create-without-internal-notes.input';
import { Type } from 'class-transformer';
import { DefinedClientCreateOrConnectWithoutInternalNotesInput } from './defined-client-create-or-connect-without-internal-notes.input';
import { DefinedClientUpsertWithoutInternalNotesInput } from './defined-client-upsert-without-internal-notes.input';
import { DefinedClientWhereInput } from './defined-client-where.input';
import { Prisma } from '@prisma/client';
import { DefinedClientWhereUniqueInput } from './defined-client-where-unique.input';
import { DefinedClientUpdateToOneWithWhereWithoutInternalNotesInput } from './defined-client-update-to-one-with-where-without-internal-notes.input';

@InputType()
export class DefinedClientUpdateOneWithoutInternalNotesNestedInput {

    @Field(() => DefinedClientCreateWithoutInternalNotesInput, {nullable:true})
    @Type(() => DefinedClientCreateWithoutInternalNotesInput)
    create?: DefinedClientCreateWithoutInternalNotesInput;

    @Field(() => DefinedClientCreateOrConnectWithoutInternalNotesInput, {nullable:true})
    @Type(() => DefinedClientCreateOrConnectWithoutInternalNotesInput)
    connectOrCreate?: DefinedClientCreateOrConnectWithoutInternalNotesInput;

    @Field(() => DefinedClientUpsertWithoutInternalNotesInput, {nullable:true})
    @Type(() => DefinedClientUpsertWithoutInternalNotesInput)
    upsert?: DefinedClientUpsertWithoutInternalNotesInput;

    @Field(() => DefinedClientWhereInput, {nullable:true})
    @Type(() => DefinedClientWhereInput)
    disconnect?: DefinedClientWhereInput;

    @Field(() => DefinedClientWhereInput, {nullable:true})
    @Type(() => DefinedClientWhereInput)
    delete?: DefinedClientWhereInput;

    @Field(() => DefinedClientWhereUniqueInput, {nullable:true})
    @Type(() => DefinedClientWhereUniqueInput)
    connect?: Prisma.AtLeast<DefinedClientWhereUniqueInput, 'id'>;

    @Field(() => DefinedClientUpdateToOneWithWhereWithoutInternalNotesInput, {nullable:true})
    @Type(() => DefinedClientUpdateToOneWithWhereWithoutInternalNotesInput)
    update?: DefinedClientUpdateToOneWithWhereWithoutInternalNotesInput;
}
