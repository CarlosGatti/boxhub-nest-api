import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StorageCreateWithoutMembersInput } from './storage-create-without-members.input';
import { Type } from 'class-transformer';
import { StorageCreateOrConnectWithoutMembersInput } from './storage-create-or-connect-without-members.input';
import { StorageUpsertWithoutMembersInput } from './storage-upsert-without-members.input';
import { Prisma } from '@prisma/client';
import { StorageWhereUniqueInput } from './storage-where-unique.input';
import { StorageUpdateToOneWithWhereWithoutMembersInput } from './storage-update-to-one-with-where-without-members.input';

@InputType()
export class StorageUpdateOneRequiredWithoutMembersNestedInput {

    @Field(() => StorageCreateWithoutMembersInput, {nullable:true})
    @Type(() => StorageCreateWithoutMembersInput)
    create?: StorageCreateWithoutMembersInput;

    @Field(() => StorageCreateOrConnectWithoutMembersInput, {nullable:true})
    @Type(() => StorageCreateOrConnectWithoutMembersInput)
    connectOrCreate?: StorageCreateOrConnectWithoutMembersInput;

    @Field(() => StorageUpsertWithoutMembersInput, {nullable:true})
    @Type(() => StorageUpsertWithoutMembersInput)
    upsert?: StorageUpsertWithoutMembersInput;

    @Field(() => StorageWhereUniqueInput, {nullable:true})
    @Type(() => StorageWhereUniqueInput)
    connect?: Prisma.AtLeast<StorageWhereUniqueInput, 'id'>;

    @Field(() => StorageUpdateToOneWithWhereWithoutMembersInput, {nullable:true})
    @Type(() => StorageUpdateToOneWithWhereWithoutMembersInput)
    update?: StorageUpdateToOneWithWhereWithoutMembersInput;
}
