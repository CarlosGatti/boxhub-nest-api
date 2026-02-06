import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { ReviewCardProject } from '../review-card-project/review-card-project.model';
import { ReviewCardTemplateCount } from './review-card-template-count.output';

@ObjectType()
export class ReviewCardTemplate {

    @Field(() => ID, {nullable:false})
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

    @Field(() => Boolean, {nullable:false,defaultValue:true})
    isActive!: boolean;

    @Field(() => String, {nullable:true})
    previewImageUrl!: string | null;

    @Field(() => GraphQLJSON, {nullable:false})
    defaultDesignJson!: any;

    @Field(() => GraphQLJSON, {nullable:false})
    editableFieldsJson!: any;

    @Field(() => GraphQLJSON, {nullable:false})
    constraintsJson!: any;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => [ReviewCardProject], {nullable:true})
    projects?: Array<ReviewCardProject>;

    @Field(() => ReviewCardTemplateCount, {nullable:false})
    _count?: ReviewCardTemplateCount;
}
