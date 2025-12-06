import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppCreateWithoutUsersInput } from './app-create-without-users.input';
import { Type } from 'class-transformer';
import { AppCreateOrConnectWithoutUsersInput } from './app-create-or-connect-without-users.input';
import { AppUpsertWithoutUsersInput } from './app-upsert-without-users.input';
import { Prisma } from '@prisma/client';
import { AppWhereUniqueInput } from './app-where-unique.input';
import { AppUpdateToOneWithWhereWithoutUsersInput } from './app-update-to-one-with-where-without-users.input';

@InputType()
export class AppUpdateOneRequiredWithoutUsersNestedInput {

    @Field(() => AppCreateWithoutUsersInput, {nullable:true})
    @Type(() => AppCreateWithoutUsersInput)
    create?: AppCreateWithoutUsersInput;

    @Field(() => AppCreateOrConnectWithoutUsersInput, {nullable:true})
    @Type(() => AppCreateOrConnectWithoutUsersInput)
    connectOrCreate?: AppCreateOrConnectWithoutUsersInput;

    @Field(() => AppUpsertWithoutUsersInput, {nullable:true})
    @Type(() => AppUpsertWithoutUsersInput)
    upsert?: AppUpsertWithoutUsersInput;

    @Field(() => AppWhereUniqueInput, {nullable:true})
    @Type(() => AppWhereUniqueInput)
    connect?: Prisma.AtLeast<AppWhereUniqueInput, 'id' | 'code'>;

    @Field(() => AppUpdateToOneWithWhereWithoutUsersInput, {nullable:true})
    @Type(() => AppUpdateToOneWithWhereWithoutUsersInput)
    update?: AppUpdateToOneWithWhereWithoutUsersInput;
}
