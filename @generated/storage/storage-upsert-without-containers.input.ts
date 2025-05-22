import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StorageUpdateWithoutContainersInput } from './storage-update-without-containers.input';
import { Type } from 'class-transformer';
import { StorageCreateWithoutContainersInput } from './storage-create-without-containers.input';
import { StorageWhereInput } from './storage-where.input';

@InputType()
export class StorageUpsertWithoutContainersInput {

    @Field(() => StorageUpdateWithoutContainersInput, {nullable:false})
    @Type(() => StorageUpdateWithoutContainersInput)
    update!: StorageUpdateWithoutContainersInput;

    @Field(() => StorageCreateWithoutContainersInput, {nullable:false})
    @Type(() => StorageCreateWithoutContainersInput)
    create!: StorageCreateWithoutContainersInput;

    @Field(() => StorageWhereInput, {nullable:true})
    @Type(() => StorageWhereInput)
    where?: StorageWhereInput;
}
