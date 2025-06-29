import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutProjectResponsibleInput } from './user-create-without-project-responsible.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutProjectResponsibleInput } from './user-create-or-connect-without-project-responsible.input';
import { UserUpsertWithoutProjectResponsibleInput } from './user-upsert-without-project-responsible.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutProjectResponsibleInput } from './user-update-to-one-with-where-without-project-responsible.input';

@InputType()
export class UserUpdateOneRequiredWithoutProjectResponsibleNestedInput {

    @Field(() => UserCreateWithoutProjectResponsibleInput, {nullable:true})
    @Type(() => UserCreateWithoutProjectResponsibleInput)
    create?: UserCreateWithoutProjectResponsibleInput;

    @Field(() => UserCreateOrConnectWithoutProjectResponsibleInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutProjectResponsibleInput)
    connectOrCreate?: UserCreateOrConnectWithoutProjectResponsibleInput;

    @Field(() => UserUpsertWithoutProjectResponsibleInput, {nullable:true})
    @Type(() => UserUpsertWithoutProjectResponsibleInput)
    upsert?: UserUpsertWithoutProjectResponsibleInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutProjectResponsibleInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutProjectResponsibleInput)
    update?: UserUpdateToOneWithWhereWithoutProjectResponsibleInput;
}
