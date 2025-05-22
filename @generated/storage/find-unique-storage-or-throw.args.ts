import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { StorageWhereUniqueInput } from './storage-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueStorageOrThrowArgs {

    @Field(() => StorageWhereUniqueInput, {nullable:false})
    @Type(() => StorageWhereUniqueInput)
    where!: Prisma.AtLeast<StorageWhereUniqueInput, 'id'>;
}
