import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StorageMemberWhereInput } from './storage-member-where.input';
import { Type } from 'class-transformer';
import { StorageMemberOrderByWithRelationInput } from './storage-member-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { StorageMemberWhereUniqueInput } from './storage-member-where-unique.input';
import { Int } from '@nestjs/graphql';
import { StorageMemberScalarFieldEnum } from './storage-member-scalar-field.enum';

@ArgsType()
export class FindManyStorageMemberArgs {

    @Field(() => StorageMemberWhereInput, {nullable:true})
    @Type(() => StorageMemberWhereInput)
    where?: StorageMemberWhereInput;

    @Field(() => [StorageMemberOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<StorageMemberOrderByWithRelationInput>;

    @Field(() => StorageMemberWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<StorageMemberWhereUniqueInput, 'id' | 'userId_storageId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [StorageMemberScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof StorageMemberScalarFieldEnum>;
}
