import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { StorageWhereInput } from './storage-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StorageMemberListRelationFilter } from '../storage-member/storage-member-list-relation-filter.input';
import { ContainerListRelationFilter } from '../container/container-list-relation-filter.input';

@InputType()
export class StorageWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [StorageWhereInput], {nullable:true})
    AND?: Array<StorageWhereInput>;

    @Field(() => [StorageWhereInput], {nullable:true})
    OR?: Array<StorageWhereInput>;

    @Field(() => [StorageWhereInput], {nullable:true})
    NOT?: Array<StorageWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StorageMemberListRelationFilter, {nullable:true})
    members?: StorageMemberListRelationFilter;

    @Field(() => ContainerListRelationFilter, {nullable:true})
    containers?: ContainerListRelationFilter;
}
