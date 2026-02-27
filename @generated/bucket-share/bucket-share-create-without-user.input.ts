import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketShareType } from '../prisma/bucket-share-type.enum';
import { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class BucketShareCreateWithoutUserInput {

    @Field(() => String, {nullable:false})
    token!: string;

    @Field(() => BucketShareType, {nullable:false})
    type!: keyof typeof BucketShareType;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => GraphQLJSON, {nullable:false})
    payload!: any;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
