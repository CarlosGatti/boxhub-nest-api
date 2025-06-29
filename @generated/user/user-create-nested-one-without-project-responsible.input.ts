import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutProjectResponsibleInput } from './user-create-without-project-responsible.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutProjectResponsibleInput } from './user-create-or-connect-without-project-responsible.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutProjectResponsibleInput {

    @Field(() => UserCreateWithoutProjectResponsibleInput, {nullable:true})
    @Type(() => UserCreateWithoutProjectResponsibleInput)
    create?: UserCreateWithoutProjectResponsibleInput;

    @Field(() => UserCreateOrConnectWithoutProjectResponsibleInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutProjectResponsibleInput)
    connectOrCreate?: UserCreateOrConnectWithoutProjectResponsibleInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
