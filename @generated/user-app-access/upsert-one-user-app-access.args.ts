import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserAppAccessWhereUniqueInput } from './user-app-access-where-unique.input';
import { Type } from 'class-transformer';
import { UserAppAccessCreateInput } from './user-app-access-create.input';
import { UserAppAccessUpdateInput } from './user-app-access-update.input';

@ArgsType()
export class UpsertOneUserAppAccessArgs {

    @Field(() => UserAppAccessWhereUniqueInput, {nullable:false})
    @Type(() => UserAppAccessWhereUniqueInput)
    where!: Prisma.AtLeast<UserAppAccessWhereUniqueInput, 'id' | 'userId_appId'>;

    @Field(() => UserAppAccessCreateInput, {nullable:false})
    @Type(() => UserAppAccessCreateInput)
    create!: UserAppAccessCreateInput;

    @Field(() => UserAppAccessUpdateInput, {nullable:false})
    @Type(() => UserAppAccessUpdateInput)
    update!: UserAppAccessUpdateInput;
}
