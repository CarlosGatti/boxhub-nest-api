import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ReviewCardProjectCount {

    @Field(() => Int, {nullable:false})
    exports?: number;

    @Field(() => Int, {nullable:false})
    scans?: number;

    @Field(() => Int, {nullable:false})
    premiumRequests?: number;
}
