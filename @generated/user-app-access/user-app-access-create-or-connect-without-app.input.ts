import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserAppAccessWhereUniqueInput } from './user-app-access-where-unique.input';
import { Type } from 'class-transformer';
import { UserAppAccessCreateWithoutAppInput } from './user-app-access-create-without-app.input';

@InputType()
export class UserAppAccessCreateOrConnectWithoutAppInput {

    @Field(() => UserAppAccessWhereUniqueInput, {nullable:false})
    @Type(() => UserAppAccessWhereUniqueInput)
    where!: Prisma.AtLeast<UserAppAccessWhereUniqueInput, 'id' | 'userId_appId'>;

    @Field(() => UserAppAccessCreateWithoutAppInput, {nullable:false})
    @Type(() => UserAppAccessCreateWithoutAppInput)
    create!: UserAppAccessCreateWithoutAppInput;
}
