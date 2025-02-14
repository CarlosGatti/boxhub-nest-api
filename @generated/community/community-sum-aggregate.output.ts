import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class CommunitySumAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    ownerId?: number;

    @Field(() => Int, {nullable:true})
    communityPlanId?: number;

    @Field(() => Int, {nullable:true})
    parentCommunityId?: number;
}
