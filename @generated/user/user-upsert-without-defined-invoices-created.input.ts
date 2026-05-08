import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutDefinedInvoicesCreatedInput } from './user-update-without-defined-invoices-created.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutDefinedInvoicesCreatedInput } from './user-create-without-defined-invoices-created.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutDefinedInvoicesCreatedInput {

    @Field(() => UserUpdateWithoutDefinedInvoicesCreatedInput, {nullable:false})
    @Type(() => UserUpdateWithoutDefinedInvoicesCreatedInput)
    update!: UserUpdateWithoutDefinedInvoicesCreatedInput;

    @Field(() => UserCreateWithoutDefinedInvoicesCreatedInput, {nullable:false})
    @Type(() => UserCreateWithoutDefinedInvoicesCreatedInput)
    create!: UserCreateWithoutDefinedInvoicesCreatedInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
