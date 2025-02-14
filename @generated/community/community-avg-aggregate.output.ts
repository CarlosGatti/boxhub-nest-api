import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class CommunityAvgAggregate {

    @Field(() => Float, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:true})
    ownerId?: number;

    @Field(() => Float, {nullable:true})
    communityPlanId?: number;

    @Field(() => Float, {nullable:true})
    parentCommunityId?: number;
}
