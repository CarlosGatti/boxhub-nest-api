import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StorageWhereInput } from './storage-where.input';
import { Type } from 'class-transformer';
import { StorageOrderByWithRelationInput } from './storage-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { StorageWhereUniqueInput } from './storage-where-unique.input';
import { Int } from '@nestjs/graphql';
import { StorageScalarFieldEnum } from './storage-scalar-field.enum';

@ArgsType()
export class FindFirstStorageArgs {

    @Field(() => StorageWhereInput, {nullable:true})
    @Type(() => StorageWhereInput)
    where?: StorageWhereInput;

    @Field(() => [StorageOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<StorageOrderByWithRelationInput>;

    @Field(() => StorageWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<StorageWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [StorageScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof StorageScalarFieldEnum>;
}
