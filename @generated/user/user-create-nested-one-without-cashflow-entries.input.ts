import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutCashflowEntriesInput } from './user-create-without-cashflow-entries.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutCashflowEntriesInput } from './user-create-or-connect-without-cashflow-entries.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutCashflowEntriesInput {

    @Field(() => UserCreateWithoutCashflowEntriesInput, {nullable:true})
    @Type(() => UserCreateWithoutCashflowEntriesInput)
    create?: UserCreateWithoutCashflowEntriesInput;

    @Field(() => UserCreateOrConnectWithoutCashflowEntriesInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutCashflowEntriesInput)
    connectOrCreate?: UserCreateOrConnectWithoutCashflowEntriesInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
