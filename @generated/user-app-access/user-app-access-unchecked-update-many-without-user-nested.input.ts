import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserAppAccessCreateWithoutUserInput } from './user-app-access-create-without-user.input';
import { Type } from 'class-transformer';
import { UserAppAccessCreateOrConnectWithoutUserInput } from './user-app-access-create-or-connect-without-user.input';
import { UserAppAccessUpsertWithWhereUniqueWithoutUserInput } from './user-app-access-upsert-with-where-unique-without-user.input';
import { UserAppAccessCreateManyUserInputEnvelope } from './user-app-access-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { UserAppAccessWhereUniqueInput } from './user-app-access-where-unique.input';
import { UserAppAccessUpdateWithWhereUniqueWithoutUserInput } from './user-app-access-update-with-where-unique-without-user.input';
import { UserAppAccessUpdateManyWithWhereWithoutUserInput } from './user-app-access-update-many-with-where-without-user.input';
import { UserAppAccessScalarWhereInput } from './user-app-access-scalar-where.input';

@InputType()
export class UserAppAccessUncheckedUpdateManyWithoutUserNestedInput {

    @Field(() => [UserAppAccessCreateWithoutUserInput], {nullable:true})
    @Type(() => UserAppAccessCreateWithoutUserInput)
    create?: Array<UserAppAccessCreateWithoutUserInput>;

    @Field(() => [UserAppAccessCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => UserAppAccessCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<UserAppAccessCreateOrConnectWithoutUserInput>;

    @Field(() => [UserAppAccessUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => UserAppAccessUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<UserAppAccessUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => UserAppAccessCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => UserAppAccessCreateManyUserInputEnvelope)
    createMany?: UserAppAccessCreateManyUserInputEnvelope;

    @Field(() => [UserAppAccessWhereUniqueInput], {nullable:true})
    @Type(() => UserAppAccessWhereUniqueInput)
    set?: Array<Prisma.AtLeast<UserAppAccessWhereUniqueInput, 'id' | 'userId_appId'>>;

    @Field(() => [UserAppAccessWhereUniqueInput], {nullable:true})
    @Type(() => UserAppAccessWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<UserAppAccessWhereUniqueInput, 'id' | 'userId_appId'>>;

    @Field(() => [UserAppAccessWhereUniqueInput], {nullable:true})
    @Type(() => UserAppAccessWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<UserAppAccessWhereUniqueInput, 'id' | 'userId_appId'>>;

    @Field(() => [UserAppAccessWhereUniqueInput], {nullable:true})
    @Type(() => UserAppAccessWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserAppAccessWhereUniqueInput, 'id' | 'userId_appId'>>;

    @Field(() => [UserAppAccessUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => UserAppAccessUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<UserAppAccessUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [UserAppAccessUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => UserAppAccessUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<UserAppAccessUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [UserAppAccessScalarWhereInput], {nullable:true})
    @Type(() => UserAppAccessScalarWhereInput)
    deleteMany?: Array<UserAppAccessScalarWhereInput>;
}
