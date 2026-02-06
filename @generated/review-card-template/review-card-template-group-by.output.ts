import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { ReviewCardTemplateCountAggregate } from './review-card-template-count-aggregate.output';
import { ReviewCardTemplateAvgAggregate } from './review-card-template-avg-aggregate.output';
import { ReviewCardTemplateSumAggregate } from './review-card-template-sum-aggregate.output';
import { ReviewCardTemplateMinAggregate } from './review-card-template-min-aggregate.output';
import { ReviewCardTemplateMaxAggregate } from './review-card-template-max-aggregate.output';

@ObjectType()
export class ReviewCardTemplateGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    key!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    category!: string;

    @Field(() => String, {nullable:false})
    aspect!: string;

    @Field(() => Int, {nullable:false})
    schemaVersion!: number;

    @Field(() => Boolean, {nullable:false})
    isActive!: boolean;

    @Field(() => String, {nullable:true})
    previewImageUrl?: string;

    @Field(() => GraphQLJSON, {nullable:false})
    defaultDesignJson!: any;

    @Field(() => GraphQLJSON, {nullable:false})
    editableFieldsJson!: any;

    @Field(() => GraphQLJSON, {nullable:false})
    constraintsJson!: any;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => ReviewCardTemplateCountAggregate, {nullable:true})
    _count?: ReviewCardTemplateCountAggregate;

    @Field(() => ReviewCardTemplateAvgAggregate, {nullable:true})
    _avg?: ReviewCardTemplateAvgAggregate;

    @Field(() => ReviewCardTemplateSumAggregate, {nullable:true})
    _sum?: ReviewCardTemplateSumAggregate;

    @Field(() => ReviewCardTemplateMinAggregate, {nullable:true})
    _min?: ReviewCardTemplateMinAggregate;

    @Field(() => ReviewCardTemplateMaxAggregate, {nullable:true})
    _max?: ReviewCardTemplateMaxAggregate;
}
