import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StorageMemberWhereInput } from './storage-member-where.input';

@InputType()
export class StorageMemberListRelationFilter {

    @Field(() => StorageMemberWhereInput, {nullable:true})
    every?: StorageMemberWhereInput;

    @Field(() => StorageMemberWhereInput, {nullable:true})
    some?: StorageMemberWhereInput;

    @Field(() => StorageMemberWhereInput, {nullable:true})
    none?: StorageMemberWhereInput;
}
