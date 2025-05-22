import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { StorageMemberWhereUniqueInput } from './storage-member-where-unique.input';
import { Type } from 'class-transformer';
import { StorageMemberUpdateWithoutUserInput } from './storage-member-update-without-user.input';
import { StorageMemberCreateWithoutUserInput } from './storage-member-create-without-user.input';

@InputType()
export class StorageMemberUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => StorageMemberWhereUniqueInput, {nullable:false})
    @Type(() => StorageMemberWhereUniqueInput)
    where!: Prisma.AtLeast<StorageMemberWhereUniqueInput, 'id' | 'userId_storageId'>;

    @Field(() => StorageMemberUpdateWithoutUserInput, {nullable:false})
    @Type(() => StorageMemberUpdateWithoutUserInput)
    update!: StorageMemberUpdateWithoutUserInput;

    @Field(() => StorageMemberCreateWithoutUserInput, {nullable:false})
    @Type(() => StorageMemberCreateWithoutUserInput)
    create!: StorageMemberCreateWithoutUserInput;
}
