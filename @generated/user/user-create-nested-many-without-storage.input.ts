import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutStorageInput } from './user-create-without-storage.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutStorageInput } from './user-create-or-connect-without-storage.input';
import { UserCreateManyStorageInputEnvelope } from './user-create-many-storage-input-envelope.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedManyWithoutStorageInput {

    @Field(() => [UserCreateWithoutStorageInput], {nullable:true})
    @Type(() => UserCreateWithoutStorageInput)
    create?: Array<UserCreateWithoutStorageInput>;

    @Field(() => [UserCreateOrConnectWithoutStorageInput], {nullable:true})
    @Type(() => UserCreateOrConnectWithoutStorageInput)
    connectOrCreate?: Array<UserCreateOrConnectWithoutStorageInput>;

    @Field(() => UserCreateManyStorageInputEnvelope, {nullable:true})
    @Type(() => UserCreateManyStorageInputEnvelope)
    createMany?: UserCreateManyStorageInputEnvelope;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>>;
}
