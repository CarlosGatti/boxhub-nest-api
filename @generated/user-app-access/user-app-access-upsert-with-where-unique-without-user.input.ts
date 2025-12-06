import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserAppAccessWhereUniqueInput } from './user-app-access-where-unique.input';
import { Type } from 'class-transformer';
import { UserAppAccessUpdateWithoutUserInput } from './user-app-access-update-without-user.input';
import { UserAppAccessCreateWithoutUserInput } from './user-app-access-create-without-user.input';

@InputType()
export class UserAppAccessUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => UserAppAccessWhereUniqueInput, {nullable:false})
    @Type(() => UserAppAccessWhereUniqueInput)
    where!: Prisma.AtLeast<UserAppAccessWhereUniqueInput, 'id' | 'userId_appId'>;

    @Field(() => UserAppAccessUpdateWithoutUserInput, {nullable:false})
    @Type(() => UserAppAccessUpdateWithoutUserInput)
    update!: UserAppAccessUpdateWithoutUserInput;

    @Field(() => UserAppAccessCreateWithoutUserInput, {nullable:false})
    @Type(() => UserAppAccessCreateWithoutUserInput)
    create!: UserAppAccessCreateWithoutUserInput;
}
