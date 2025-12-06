import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserAppAccessWhereUniqueInput } from './user-app-access-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueUserAppAccessArgs {

    @Field(() => UserAppAccessWhereUniqueInput, {nullable:false})
    @Type(() => UserAppAccessWhereUniqueInput)
    where!: Prisma.AtLeast<UserAppAccessWhereUniqueInput, 'id' | 'userId_appId'>;
}
