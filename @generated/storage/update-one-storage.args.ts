import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StorageUpdateInput } from './storage-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { StorageWhereUniqueInput } from './storage-where-unique.input';

@ArgsType()
export class UpdateOneStorageArgs {

    @Field(() => StorageUpdateInput, {nullable:false})
    @Type(() => StorageUpdateInput)
    data!: StorageUpdateInput;

    @Field(() => StorageWhereUniqueInput, {nullable:false})
    @Type(() => StorageWhereUniqueInput)
    where!: Prisma.AtLeast<StorageWhereUniqueInput, 'id'>;
}
