import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class StorageCount {

    @Field(() => Int, {nullable:false})
    members?: number;

    @Field(() => Int, {nullable:false})
    containers?: number;
}
