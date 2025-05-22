import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { StorageMemberUserIdStorageIdCompoundUniqueInput } from './storage-member-user-id-storage-id-compound-unique.input';
import { StorageMemberWhereInput } from './storage-member-where.input';
import { IntFilter } from '../prisma/int-filter.input';
import { EnumStorageRoleFilter } from '../prisma/enum-storage-role-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { StorageRelationFilter } from '../storage/storage-relation-filter.input';

@InputType()
export class StorageMemberWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => StorageMemberUserIdStorageIdCompoundUniqueInput, {nullable:true})
    userId_storageId?: StorageMemberUserIdStorageIdCompoundUniqueInput;

    @Field(() => [StorageMemberWhereInput], {nullable:true})
    AND?: Array<StorageMemberWhereInput>;

    @Field(() => [StorageMemberWhereInput], {nullable:true})
    OR?: Array<StorageMemberWhereInput>;

    @Field(() => [StorageMemberWhereInput], {nullable:true})
    NOT?: Array<StorageMemberWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    storageId?: IntFilter;

    @Field(() => EnumStorageRoleFilter, {nullable:true})
    role?: EnumStorageRoleFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => StorageRelationFilter, {nullable:true})
    storage?: StorageRelationFilter;
}
