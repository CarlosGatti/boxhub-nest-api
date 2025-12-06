import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserAppAccessCreateWithoutUserInput } from './user-app-access-create-without-user.input';
import { Type } from 'class-transformer';
import { UserAppAccessCreateOrConnectWithoutUserInput } from './user-app-access-create-or-connect-without-user.input';
import { UserAppAccessCreateManyUserInputEnvelope } from './user-app-access-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { UserAppAccessWhereUniqueInput } from './user-app-access-where-unique.input';

@InputType()
export class UserAppAccessUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [UserAppAccessCreateWithoutUserInput], {nullable:true})
    @Type(() => UserAppAccessCreateWithoutUserInput)
    create?: Array<UserAppAccessCreateWithoutUserInput>;

    @Field(() => [UserAppAccessCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => UserAppAccessCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<UserAppAccessCreateOrConnectWithoutUserInput>;

    @Field(() => UserAppAccessCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => UserAppAccessCreateManyUserInputEnvelope)
    createMany?: UserAppAccessCreateManyUserInputEnvelope;

    @Field(() => [UserAppAccessWhereUniqueInput], {nullable:true})
    @Type(() => UserAppAccessWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserAppAccessWhereUniqueInput, 'id' | 'userId_appId'>>;
}
