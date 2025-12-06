import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppCreateWithoutUsersInput } from './app-create-without-users.input';
import { Type } from 'class-transformer';
import { AppCreateOrConnectWithoutUsersInput } from './app-create-or-connect-without-users.input';
import { Prisma } from '@prisma/client';
import { AppWhereUniqueInput } from './app-where-unique.input';

@InputType()
export class AppCreateNestedOneWithoutUsersInput {

    @Field(() => AppCreateWithoutUsersInput, {nullable:true})
    @Type(() => AppCreateWithoutUsersInput)
    create?: AppCreateWithoutUsersInput;

    @Field(() => AppCreateOrConnectWithoutUsersInput, {nullable:true})
    @Type(() => AppCreateOrConnectWithoutUsersInput)
    connectOrCreate?: AppCreateOrConnectWithoutUsersInput;

    @Field(() => AppWhereUniqueInput, {nullable:true})
    @Type(() => AppWhereUniqueInput)
    connect?: Prisma.AtLeast<AppWhereUniqueInput, 'id' | 'code'>;
}
