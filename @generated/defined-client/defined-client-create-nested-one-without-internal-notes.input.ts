import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedClientCreateWithoutInternalNotesInput } from './defined-client-create-without-internal-notes.input';
import { Type } from 'class-transformer';
import { DefinedClientCreateOrConnectWithoutInternalNotesInput } from './defined-client-create-or-connect-without-internal-notes.input';
import { Prisma } from '@prisma/client';
import { DefinedClientWhereUniqueInput } from './defined-client-where-unique.input';

@InputType()
export class DefinedClientCreateNestedOneWithoutInternalNotesInput {

    @Field(() => DefinedClientCreateWithoutInternalNotesInput, {nullable:true})
    @Type(() => DefinedClientCreateWithoutInternalNotesInput)
    create?: DefinedClientCreateWithoutInternalNotesInput;

    @Field(() => DefinedClientCreateOrConnectWithoutInternalNotesInput, {nullable:true})
    @Type(() => DefinedClientCreateOrConnectWithoutInternalNotesInput)
    connectOrCreate?: DefinedClientCreateOrConnectWithoutInternalNotesInput;

    @Field(() => DefinedClientWhereUniqueInput, {nullable:true})
    @Type(() => DefinedClientWhereUniqueInput)
    connect?: Prisma.AtLeast<DefinedClientWhereUniqueInput, 'id'>;
}
