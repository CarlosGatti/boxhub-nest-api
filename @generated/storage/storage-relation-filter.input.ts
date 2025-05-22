import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StorageWhereInput } from './storage-where.input';

@InputType()
export class StorageRelationFilter {

    @Field(() => StorageWhereInput, {nullable:true})
    is?: StorageWhereInput;

    @Field(() => StorageWhereInput, {nullable:true})
    isNot?: StorageWhereInput;
}
