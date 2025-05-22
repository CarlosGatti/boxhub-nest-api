import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StorageMemberUpdateInput } from './storage-member-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { StorageMemberWhereUniqueInput } from './storage-member-where-unique.input';

@ArgsType()
export class UpdateOneStorageMemberArgs {

    @Field(() => StorageMemberUpdateInput, {nullable:false})
    @Type(() => StorageMemberUpdateInput)
    data!: StorageMemberUpdateInput;

    @Field(() => StorageMemberWhereUniqueInput, {nullable:false})
    @Type(() => StorageMemberWhereUniqueInput)
    where!: Prisma.AtLeast<StorageMemberWhereUniqueInput, 'id' | 'userId_storageId'>;
}
