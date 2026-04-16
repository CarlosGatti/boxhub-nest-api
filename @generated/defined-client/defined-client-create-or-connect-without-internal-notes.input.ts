import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedClientWhereUniqueInput } from './defined-client-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedClientCreateWithoutInternalNotesInput } from './defined-client-create-without-internal-notes.input';

@InputType()
export class DefinedClientCreateOrConnectWithoutInternalNotesInput {

    @Field(() => DefinedClientWhereUniqueInput, {nullable:false})
    @Type(() => DefinedClientWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedClientWhereUniqueInput, 'id'>;

    @Field(() => DefinedClientCreateWithoutInternalNotesInput, {nullable:false})
    @Type(() => DefinedClientCreateWithoutInternalNotesInput)
    create!: DefinedClientCreateWithoutInternalNotesInput;
}
