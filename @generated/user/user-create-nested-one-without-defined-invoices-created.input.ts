import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutDefinedInvoicesCreatedInput } from './user-create-without-defined-invoices-created.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutDefinedInvoicesCreatedInput } from './user-create-or-connect-without-defined-invoices-created.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutDefinedInvoicesCreatedInput {

    @Field(() => UserCreateWithoutDefinedInvoicesCreatedInput, {nullable:true})
    @Type(() => UserCreateWithoutDefinedInvoicesCreatedInput)
    create?: UserCreateWithoutDefinedInvoicesCreatedInput;

    @Field(() => UserCreateOrConnectWithoutDefinedInvoicesCreatedInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutDefinedInvoicesCreatedInput)
    connectOrCreate?: UserCreateOrConnectWithoutDefinedInvoicesCreatedInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
