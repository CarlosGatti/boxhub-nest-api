import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { BucketMediaType } from '../prisma/bucket-media-type.enum';

@ObjectType()
export class BucketGoalMediaMaxAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    goalId?: number;

    @Field(() => Int, {nullable:true})
    logId?: number;

    @Field(() => String, {nullable:true})
    url?: string;

    @Field(() => BucketMediaType, {nullable:true})
    type?: keyof typeof BucketMediaType;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
