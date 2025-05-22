import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { StorageMember } from '../storage-member/storage-member.model';
import { Container } from '../container/container.model';
import { StorageCount } from './storage-count.output';

@ObjectType()
export class Storage {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => [StorageMember], {nullable:true})
    members?: Array<StorageMember>;

    @Field(() => [Container], {nullable:true})
    containers?: Array<Container>;

    @Field(() => StorageCount, {nullable:false})
    _count?: StorageCount;
}
