import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutDefinedInternalNotesInput } from './user-create-without-defined-internal-notes.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutDefinedInternalNotesInput } from './user-create-or-connect-without-defined-internal-notes.input';
import { UserUpsertWithoutDefinedInternalNotesInput } from './user-upsert-without-defined-internal-notes.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutDefinedInternalNotesInput } from './user-update-to-one-with-where-without-defined-internal-notes.input';

@InputType()
export class UserUpdateOneRequiredWithoutDefinedInternalNotesNestedInput {

    @Field(() => UserCreateWithoutDefinedInternalNotesInput, {nullable:true})
    @Type(() => UserCreateWithoutDefinedInternalNotesInput)
    create?: UserCreateWithoutDefinedInternalNotesInput;

    @Field(() => UserCreateOrConnectWithoutDefinedInternalNotesInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutDefinedInternalNotesInput)
    connectOrCreate?: UserCreateOrConnectWithoutDefinedInternalNotesInput;

    @Field(() => UserUpsertWithoutDefinedInternalNotesInput, {nullable:true})
    @Type(() => UserUpsertWithoutDefinedInternalNotesInput)
    upsert?: UserUpsertWithoutDefinedInternalNotesInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutDefinedInternalNotesInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutDefinedInternalNotesInput)
    update?: UserUpdateToOneWithWhereWithoutDefinedInternalNotesInput;
}
