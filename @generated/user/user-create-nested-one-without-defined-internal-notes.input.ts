import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutDefinedInternalNotesInput } from './user-create-without-defined-internal-notes.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutDefinedInternalNotesInput } from './user-create-or-connect-without-defined-internal-notes.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutDefinedInternalNotesInput {

    @Field(() => UserCreateWithoutDefinedInternalNotesInput, {nullable:true})
    @Type(() => UserCreateWithoutDefinedInternalNotesInput)
    create?: UserCreateWithoutDefinedInternalNotesInput;

    @Field(() => UserCreateOrConnectWithoutDefinedInternalNotesInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutDefinedInternalNotesInput)
    connectOrCreate?: UserCreateOrConnectWithoutDefinedInternalNotesInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
