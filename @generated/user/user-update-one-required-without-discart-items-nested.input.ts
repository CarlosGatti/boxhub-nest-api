import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutDiscartItemsInput } from './user-create-without-discart-items.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutDiscartItemsInput } from './user-create-or-connect-without-discart-items.input';
import { UserUpsertWithoutDiscartItemsInput } from './user-upsert-without-discart-items.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutDiscartItemsInput } from './user-update-to-one-with-where-without-discart-items.input';

@InputType()
export class UserUpdateOneRequiredWithoutDiscartItemsNestedInput {

    @Field(() => UserCreateWithoutDiscartItemsInput, {nullable:true})
    @Type(() => UserCreateWithoutDiscartItemsInput)
    create?: UserCreateWithoutDiscartItemsInput;

    @Field(() => UserCreateOrConnectWithoutDiscartItemsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutDiscartItemsInput)
    connectOrCreate?: UserCreateOrConnectWithoutDiscartItemsInput;

    @Field(() => UserUpsertWithoutDiscartItemsInput, {nullable:true})
    @Type(() => UserUpsertWithoutDiscartItemsInput)
    upsert?: UserUpsertWithoutDiscartItemsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutDiscartItemsInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutDiscartItemsInput)
    update?: UserUpdateToOneWithWhereWithoutDiscartItemsInput;
}
