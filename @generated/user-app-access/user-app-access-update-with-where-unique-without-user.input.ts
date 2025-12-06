import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserAppAccessWhereUniqueInput } from './user-app-access-where-unique.input';
import { Type } from 'class-transformer';
import { UserAppAccessUpdateWithoutUserInput } from './user-app-access-update-without-user.input';

@InputType()
export class UserAppAccessUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => UserAppAccessWhereUniqueInput, {nullable:false})
    @Type(() => UserAppAccessWhereUniqueInput)
    where!: Prisma.AtLeast<UserAppAccessWhereUniqueInput, 'id' | 'userId_appId'>;

    @Field(() => UserAppAccessUpdateWithoutUserInput, {nullable:false})
    @Type(() => UserAppAccessUpdateWithoutUserInput)
    data!: UserAppAccessUpdateWithoutUserInput;
}
