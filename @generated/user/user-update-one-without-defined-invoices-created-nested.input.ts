import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutDefinedInvoicesCreatedInput } from './user-create-without-defined-invoices-created.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutDefinedInvoicesCreatedInput } from './user-create-or-connect-without-defined-invoices-created.input';
import { UserUpsertWithoutDefinedInvoicesCreatedInput } from './user-upsert-without-defined-invoices-created.input';
import { UserWhereInput } from './user-where.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutDefinedInvoicesCreatedInput } from './user-update-to-one-with-where-without-defined-invoices-created.input';

@InputType()
export class UserUpdateOneWithoutDefinedInvoicesCreatedNestedInput {

    @Field(() => UserCreateWithoutDefinedInvoicesCreatedInput, {nullable:true})
    @Type(() => UserCreateWithoutDefinedInvoicesCreatedInput)
    create?: UserCreateWithoutDefinedInvoicesCreatedInput;

    @Field(() => UserCreateOrConnectWithoutDefinedInvoicesCreatedInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutDefinedInvoicesCreatedInput)
    connectOrCreate?: UserCreateOrConnectWithoutDefinedInvoicesCreatedInput;

    @Field(() => UserUpsertWithoutDefinedInvoicesCreatedInput, {nullable:true})
    @Type(() => UserUpsertWithoutDefinedInvoicesCreatedInput)
    upsert?: UserUpsertWithoutDefinedInvoicesCreatedInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    disconnect?: UserWhereInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    delete?: UserWhereInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutDefinedInvoicesCreatedInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutDefinedInvoicesCreatedInput)
    update?: UserUpdateToOneWithWhereWithoutDefinedInvoicesCreatedInput;
}
