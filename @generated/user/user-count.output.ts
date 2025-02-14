import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class UserCount {

    @Field(() => Int, {nullable:false})
    adminCommunities?: number;

    @Field(() => Int, {nullable:false})
    memberCommunities?: number;

    @Field(() => Int, {nullable:false})
    events?: number;

    @Field(() => Int, {nullable:false})
    eventMember?: number;

    @Field(() => Int, {nullable:false})
    eventTicket?: number;

    @Field(() => Int, {nullable:false})
    following?: number;

    @Field(() => Int, {nullable:false})
    followers?: number;

    @Field(() => Int, {nullable:false})
    posts?: number;

    @Field(() => Int, {nullable:false})
    publications?: number;

    @Field(() => Int, {nullable:false})
    allPublicationComments?: number;

    @Field(() => Int, {nullable:false})
    allPublicationLikes?: number;
}
