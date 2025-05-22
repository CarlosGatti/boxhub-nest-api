import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { StorageRole } from '../prisma/storage-role.enum';
import { User } from '../user/user.model';
import { Storage } from '../storage/storage.model';

@ObjectType()
export class StorageMember {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:false})
    storageId!: number;

    @Field(() => StorageRole, {nullable:false,defaultValue:'MEMBER'})
    role!: keyof typeof StorageRole;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => Storage, {nullable:false})
    storage?: Storage;
}
