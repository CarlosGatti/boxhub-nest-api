import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserAppAccessCreateWithoutAppInput } from './user-app-access-create-without-app.input';
import { Type } from 'class-transformer';
import { UserAppAccessCreateOrConnectWithoutAppInput } from './user-app-access-create-or-connect-without-app.input';
import { UserAppAccessCreateManyAppInputEnvelope } from './user-app-access-create-many-app-input-envelope.input';
import { Prisma } from '@prisma/client';
import { UserAppAccessWhereUniqueInput } from './user-app-access-where-unique.input';

@InputType()
export class UserAppAccessUncheckedCreateNestedManyWithoutAppInput {

    @Field(() => [UserAppAccessCreateWithoutAppInput], {nullable:true})
    @Type(() => UserAppAccessCreateWithoutAppInput)
    create?: Array<UserAppAccessCreateWithoutAppInput>;

    @Field(() => [UserAppAccessCreateOrConnectWithoutAppInput], {nullable:true})
    @Type(() => UserAppAccessCreateOrConnectWithoutAppInput)
    connectOrCreate?: Array<UserAppAccessCreateOrConnectWithoutAppInput>;

    @Field(() => UserAppAccessCreateManyAppInputEnvelope, {nullable:true})
    @Type(() => UserAppAccessCreateManyAppInputEnvelope)
    createMany?: UserAppAccessCreateManyAppInputEnvelope;

    @Field(() => [UserAppAccessWhereUniqueInput], {nullable:true})
    @Type(() => UserAppAccessWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserAppAccessWhereUniqueInput, 'id' | 'userId_appId'>>;
}
