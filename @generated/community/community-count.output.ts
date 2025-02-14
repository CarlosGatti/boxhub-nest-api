import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class CommunityCount {

    @Field(() => Int, {nullable:false})
    groups?: number;

    @Field(() => Int, {nullable:false})
    members?: number;

    @Field(() => Int, {nullable:false})
    events?: number;

    @Field(() => Int, {nullable:false})
    facets?: number;

    @Field(() => Int, {nullable:false})
    publications?: number;
}
