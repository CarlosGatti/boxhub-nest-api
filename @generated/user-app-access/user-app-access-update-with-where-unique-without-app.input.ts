import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserAppAccessWhereUniqueInput } from './user-app-access-where-unique.input';
import { Type } from 'class-transformer';
import { UserAppAccessUpdateWithoutAppInput } from './user-app-access-update-without-app.input';

@InputType()
export class UserAppAccessUpdateWithWhereUniqueWithoutAppInput {

    @Field(() => UserAppAccessWhereUniqueInput, {nullable:false})
    @Type(() => UserAppAccessWhereUniqueInput)
    where!: Prisma.AtLeast<UserAppAccessWhereUniqueInput, 'id' | 'userId_appId'>;

    @Field(() => UserAppAccessUpdateWithoutAppInput, {nullable:false})
    @Type(() => UserAppAccessUpdateWithoutAppInput)
    data!: UserAppAccessUpdateWithoutAppInput;
}
