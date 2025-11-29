import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class UserCount {

    @Field(() => Int, {nullable:false})
    storageMemberships?: number;

    @Field(() => Int, {nullable:false})
    logs?: number;

    @Field(() => Int, {nullable:false})
    projectResponsible?: number;

    @Field(() => Int, {nullable:false})
    constructionLogs?: number;

    @Field(() => Int, {nullable:false})
    logComments?: number;

    @Field(() => Int, {nullable:false})
    logCommentReplies?: number;

    @Field(() => Int, {nullable:false})
    responsibleInspections?: number;

    @Field(() => Int, {nullable:false})
    receivedMaterials?: number;

    @Field(() => Int, {nullable:false})
    discartItems?: number;

    @Field(() => Int, {nullable:false})
    comments?: number;

    @Field(() => Int, {nullable:false})
    ratingsAsSeller?: number;

    @Field(() => Int, {nullable:false})
    ratingsAsBuyer?: number;
}
