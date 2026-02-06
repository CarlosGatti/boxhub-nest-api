import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ReviewCardProjectStatus } from '../prisma/review-card-project-status.enum';
import { ReviewCardLinkMode } from '../prisma/review-card-link-mode.enum';
import { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class ReviewCardProjectCreateManyUserInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:false})
    businessId!: number;

    @Field(() => Int, {nullable:false})
    templateId!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    slug?: string;

    @Field(() => ReviewCardProjectStatus, {nullable:true})
    status?: keyof typeof ReviewCardProjectStatus;

    @Field(() => ReviewCardLinkMode, {nullable:true})
    reviewLinkMode?: keyof typeof ReviewCardLinkMode;

    @Field(() => String, {nullable:true})
    googleReviewUrlFinal?: string;

    @Field(() => GraphQLJSON, {nullable:true})
    designJson?: any;

    @Field(() => GraphQLJSON, {nullable:true})
    assetsJson?: any;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
