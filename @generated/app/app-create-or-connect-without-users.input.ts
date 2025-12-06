import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AppWhereUniqueInput } from './app-where-unique.input';
import { Type } from 'class-transformer';
import { AppCreateWithoutUsersInput } from './app-create-without-users.input';

@InputType()
export class AppCreateOrConnectWithoutUsersInput {

    @Field(() => AppWhereUniqueInput, {nullable:false})
    @Type(() => AppWhereUniqueInput)
    where!: Prisma.AtLeast<AppWhereUniqueInput, 'id' | 'code'>;

    @Field(() => AppCreateWithoutUsersInput, {nullable:false})
    @Type(() => AppCreateWithoutUsersInput)
    create!: AppCreateWithoutUsersInput;
}
