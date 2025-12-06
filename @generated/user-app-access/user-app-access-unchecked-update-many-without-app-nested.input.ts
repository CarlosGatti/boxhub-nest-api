import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserAppAccessCreateWithoutAppInput } from './user-app-access-create-without-app.input';
import { Type } from 'class-transformer';
import { UserAppAccessCreateOrConnectWithoutAppInput } from './user-app-access-create-or-connect-without-app.input';
import { UserAppAccessUpsertWithWhereUniqueWithoutAppInput } from './user-app-access-upsert-with-where-unique-without-app.input';
import { UserAppAccessCreateManyAppInputEnvelope } from './user-app-access-create-many-app-input-envelope.input';
import { Prisma } from '@prisma/client';
import { UserAppAccessWhereUniqueInput } from './user-app-access-where-unique.input';
import { UserAppAccessUpdateWithWhereUniqueWithoutAppInput } from './user-app-access-update-with-where-unique-without-app.input';
import { UserAppAccessUpdateManyWithWhereWithoutAppInput } from './user-app-access-update-many-with-where-without-app.input';
import { UserAppAccessScalarWhereInput } from './user-app-access-scalar-where.input';

@InputType()
export class UserAppAccessUncheckedUpdateManyWithoutAppNestedInput {

    @Field(() => [UserAppAccessCreateWithoutAppInput], {nullable:true})
    @Type(() => UserAppAccessCreateWithoutAppInput)
    create?: Array<UserAppAccessCreateWithoutAppInput>;

    @Field(() => [UserAppAccessCreateOrConnectWithoutAppInput], {nullable:true})
    @Type(() => UserAppAccessCreateOrConnectWithoutAppInput)
    connectOrCreate?: Array<UserAppAccessCreateOrConnectWithoutAppInput>;

    @Field(() => [UserAppAccessUpsertWithWhereUniqueWithoutAppInput], {nullable:true})
    @Type(() => UserAppAccessUpsertWithWhereUniqueWithoutAppInput)
    upsert?: Array<UserAppAccessUpsertWithWhereUniqueWithoutAppInput>;

    @Field(() => UserAppAccessCreateManyAppInputEnvelope, {nullable:true})
    @Type(() => UserAppAccessCreateManyAppInputEnvelope)
    createMany?: UserAppAccessCreateManyAppInputEnvelope;

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

    @Field(() => [UserAppAccessUpdateWithWhereUniqueWithoutAppInput], {nullable:true})
    @Type(() => UserAppAccessUpdateWithWhereUniqueWithoutAppInput)
    update?: Array<UserAppAccessUpdateWithWhereUniqueWithoutAppInput>;

    @Field(() => [UserAppAccessUpdateManyWithWhereWithoutAppInput], {nullable:true})
    @Type(() => UserAppAccessUpdateManyWithWhereWithoutAppInput)
    updateMany?: Array<UserAppAccessUpdateManyWithWhereWithoutAppInput>;

    @Field(() => [UserAppAccessScalarWhereInput], {nullable:true})
    @Type(() => UserAppAccessScalarWhereInput)
    deleteMany?: Array<UserAppAccessScalarWhereInput>;
}
