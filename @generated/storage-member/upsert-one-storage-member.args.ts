import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { StorageMemberWhereUniqueInput } from './storage-member-where-unique.input';
import { Type } from 'class-transformer';
import { StorageMemberCreateInput } from './storage-member-create.input';
import { StorageMemberUpdateInput } from './storage-member-update.input';

@ArgsType()
export class UpsertOneStorageMemberArgs {

    @Field(() => StorageMemberWhereUniqueInput, {nullable:false})
    @Type(() => StorageMemberWhereUniqueInput)
    where!: Prisma.AtLeast<StorageMemberWhereUniqueInput, 'id' | 'userId_storageId'>;

    @Field(() => StorageMemberCreateInput, {nullable:false})
    @Type(() => StorageMemberCreateInput)
    create!: StorageMemberCreateInput;

    @Field(() => StorageMemberUpdateInput, {nullable:false})
    @Type(() => StorageMemberUpdateInput)
    update!: StorageMemberUpdateInput;
}
