import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { StorageMemberWhereUniqueInput } from './storage-member-where-unique.input';
import { Type } from 'class-transformer';
import { StorageMemberCreateWithoutUserInput } from './storage-member-create-without-user.input';

@InputType()
export class StorageMemberCreateOrConnectWithoutUserInput {

    @Field(() => StorageMemberWhereUniqueInput, {nullable:false})
    @Type(() => StorageMemberWhereUniqueInput)
    where!: Prisma.AtLeast<StorageMemberWhereUniqueInput, 'id' | 'userId_storageId'>;

    @Field(() => StorageMemberCreateWithoutUserInput, {nullable:false})
    @Type(() => StorageMemberCreateWithoutUserInput)
    create!: StorageMemberCreateWithoutUserInput;
}
