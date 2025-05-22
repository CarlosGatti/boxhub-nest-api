import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { StorageWhereUniqueInput } from './storage-where-unique.input';
import { Type } from 'class-transformer';
import { StorageCreateWithoutMembersInput } from './storage-create-without-members.input';

@InputType()
export class StorageCreateOrConnectWithoutMembersInput {

    @Field(() => StorageWhereUniqueInput, {nullable:false})
    @Type(() => StorageWhereUniqueInput)
    where!: Prisma.AtLeast<StorageWhereUniqueInput, 'id'>;

    @Field(() => StorageCreateWithoutMembersInput, {nullable:false})
    @Type(() => StorageCreateWithoutMembersInput)
    create!: StorageCreateWithoutMembersInput;
}
