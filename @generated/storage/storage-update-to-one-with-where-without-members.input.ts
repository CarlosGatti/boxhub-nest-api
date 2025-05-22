import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StorageWhereInput } from './storage-where.input';
import { Type } from 'class-transformer';
import { StorageUpdateWithoutMembersInput } from './storage-update-without-members.input';

@InputType()
export class StorageUpdateToOneWithWhereWithoutMembersInput {

    @Field(() => StorageWhereInput, {nullable:true})
    @Type(() => StorageWhereInput)
    where?: StorageWhereInput;

    @Field(() => StorageUpdateWithoutMembersInput, {nullable:false})
    @Type(() => StorageUpdateWithoutMembersInput)
    data!: StorageUpdateWithoutMembersInput;
}
