import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutResponsibleInspectionsInput } from './user-create-without-responsible-inspections.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutResponsibleInspectionsInput } from './user-create-or-connect-without-responsible-inspections.input';
import { UserUpsertWithoutResponsibleInspectionsInput } from './user-upsert-without-responsible-inspections.input';
import { UserWhereInput } from './user-where.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutResponsibleInspectionsInput } from './user-update-to-one-with-where-without-responsible-inspections.input';

@InputType()
export class UserUpdateOneWithoutResponsibleInspectionsNestedInput {

    @Field(() => UserCreateWithoutResponsibleInspectionsInput, {nullable:true})
    @Type(() => UserCreateWithoutResponsibleInspectionsInput)
    create?: UserCreateWithoutResponsibleInspectionsInput;

    @Field(() => UserCreateOrConnectWithoutResponsibleInspectionsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutResponsibleInspectionsInput)
    connectOrCreate?: UserCreateOrConnectWithoutResponsibleInspectionsInput;

    @Field(() => UserUpsertWithoutResponsibleInspectionsInput, {nullable:true})
    @Type(() => UserUpsertWithoutResponsibleInspectionsInput)
    upsert?: UserUpsertWithoutResponsibleInspectionsInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    disconnect?: UserWhereInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    delete?: UserWhereInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutResponsibleInspectionsInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutResponsibleInspectionsInput)
    update?: UserUpdateToOneWithWhereWithoutResponsibleInspectionsInput;
}
