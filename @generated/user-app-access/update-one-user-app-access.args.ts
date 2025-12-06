import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserAppAccessUpdateInput } from './user-app-access-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { UserAppAccessWhereUniqueInput } from './user-app-access-where-unique.input';

@ArgsType()
export class UpdateOneUserAppAccessArgs {

    @Field(() => UserAppAccessUpdateInput, {nullable:false})
    @Type(() => UserAppAccessUpdateInput)
    data!: UserAppAccessUpdateInput;

    @Field(() => UserAppAccessWhereUniqueInput, {nullable:false})
    @Type(() => UserAppAccessWhereUniqueInput)
    where!: Prisma.AtLeast<UserAppAccessWhereUniqueInput, 'id' | 'userId_appId'>;
}
