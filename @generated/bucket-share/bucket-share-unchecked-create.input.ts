import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { BucketShareType } from '../prisma/bucket-share-type.enum';
import { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class BucketShareUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => String, {nullable:false})
    token!: string;

    @Field(() => BucketShareType, {nullable:false})
    type!: keyof typeof BucketShareType;

    @Field(() => GraphQLJSON, {nullable:false})
    payload!: any;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
