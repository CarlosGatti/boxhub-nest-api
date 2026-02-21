import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { BucketShareType } from '../prisma/bucket-share-type.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { User } from '../user/user.model';

@ObjectType()
export class BucketShare {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => String, {nullable:false})
    token!: string;

    @Field(() => BucketShareType, {nullable:false})
    type!: keyof typeof BucketShareType;

    @Field(() => GraphQLJSON, {nullable:false})
    payload!: any;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => User, {nullable:false})
    user?: User;
}
