import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StorageUpdateWithoutMembersInput } from './storage-update-without-members.input';
import { Type } from 'class-transformer';
import { StorageCreateWithoutMembersInput } from './storage-create-without-members.input';
import { StorageWhereInput } from './storage-where.input';

@InputType()
export class StorageUpsertWithoutMembersInput {

    @Field(() => StorageUpdateWithoutMembersInput, {nullable:false})
    @Type(() => StorageUpdateWithoutMembersInput)
    update!: StorageUpdateWithoutMembersInput;

    @Field(() => StorageCreateWithoutMembersInput, {nullable:false})
    @Type(() => StorageCreateWithoutMembersInput)
    create!: StorageCreateWithoutMembersInput;

    @Field(() => StorageWhereInput, {nullable:true})
    @Type(() => StorageWhereInput)
    where?: StorageWhereInput;
}
