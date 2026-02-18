import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { BucketMediaType } from '../prisma/bucket-media-type.enum';
import { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class BucketGoalMediaCreateManyLogInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    goalId?: number;

    @Field(() => String, {nullable:false})
    url!: string;

    @Field(() => BucketMediaType, {nullable:true})
    type?: keyof typeof BucketMediaType;

    @Field(() => GraphQLJSON, {nullable:true})
    metadata?: any;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
