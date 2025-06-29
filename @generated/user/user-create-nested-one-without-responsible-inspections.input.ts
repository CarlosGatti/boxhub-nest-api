import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutResponsibleInspectionsInput } from './user-create-without-responsible-inspections.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutResponsibleInspectionsInput } from './user-create-or-connect-without-responsible-inspections.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutResponsibleInspectionsInput {

    @Field(() => UserCreateWithoutResponsibleInspectionsInput, {nullable:true})
    @Type(() => UserCreateWithoutResponsibleInspectionsInput)
    create?: UserCreateWithoutResponsibleInspectionsInput;

    @Field(() => UserCreateOrConnectWithoutResponsibleInspectionsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutResponsibleInspectionsInput)
    connectOrCreate?: UserCreateOrConnectWithoutResponsibleInspectionsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
