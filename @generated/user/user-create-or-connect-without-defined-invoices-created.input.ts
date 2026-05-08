import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutDefinedInvoicesCreatedInput } from './user-create-without-defined-invoices-created.input';

@InputType()
export class UserCreateOrConnectWithoutDefinedInvoicesCreatedInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutDefinedInvoicesCreatedInput, {nullable:false})
    @Type(() => UserCreateWithoutDefinedInvoicesCreatedInput)
    create!: UserCreateWithoutDefinedInvoicesCreatedInput;
}
