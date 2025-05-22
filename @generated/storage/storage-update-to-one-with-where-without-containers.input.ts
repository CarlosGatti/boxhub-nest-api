import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StorageWhereInput } from './storage-where.input';
import { Type } from 'class-transformer';
import { StorageUpdateWithoutContainersInput } from './storage-update-without-containers.input';

@InputType()
export class StorageUpdateToOneWithWhereWithoutContainersInput {

    @Field(() => StorageWhereInput, {nullable:true})
    @Type(() => StorageWhereInput)
    where?: StorageWhereInput;

    @Field(() => StorageUpdateWithoutContainersInput, {nullable:false})
    @Type(() => StorageUpdateWithoutContainersInput)
    data!: StorageUpdateWithoutContainersInput;
}
