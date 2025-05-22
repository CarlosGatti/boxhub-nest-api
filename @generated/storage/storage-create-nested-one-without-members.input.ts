import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StorageCreateWithoutMembersInput } from './storage-create-without-members.input';
import { Type } from 'class-transformer';
import { StorageCreateOrConnectWithoutMembersInput } from './storage-create-or-connect-without-members.input';
import { Prisma } from '@prisma/client';
import { StorageWhereUniqueInput } from './storage-where-unique.input';

@InputType()
export class StorageCreateNestedOneWithoutMembersInput {

    @Field(() => StorageCreateWithoutMembersInput, {nullable:true})
    @Type(() => StorageCreateWithoutMembersInput)
    create?: StorageCreateWithoutMembersInput;

    @Field(() => StorageCreateOrConnectWithoutMembersInput, {nullable:true})
    @Type(() => StorageCreateOrConnectWithoutMembersInput)
    connectOrCreate?: StorageCreateOrConnectWithoutMembersInput;

    @Field(() => StorageWhereUniqueInput, {nullable:true})
    @Type(() => StorageWhereUniqueInput)
    connect?: Prisma.AtLeast<StorageWhereUniqueInput, 'id'>;
}
