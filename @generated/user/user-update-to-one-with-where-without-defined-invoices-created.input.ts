import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutDefinedInvoicesCreatedInput } from './user-update-without-defined-invoices-created.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutDefinedInvoicesCreatedInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutDefinedInvoicesCreatedInput, {nullable:false})
    @Type(() => UserUpdateWithoutDefinedInvoicesCreatedInput)
    data!: UserUpdateWithoutDefinedInvoicesCreatedInput;
}
