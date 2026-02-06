import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ReviewCardTemplateCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    key!: number;

    @Field(() => Int, {nullable:false})
    name!: number;

    @Field(() => Int, {nullable:false})
    category!: number;

    @Field(() => Int, {nullable:false})
    aspect!: number;

    @Field(() => Int, {nullable:false})
    schemaVersion!: number;

    @Field(() => Int, {nullable:false})
    isActive!: number;

    @Field(() => Int, {nullable:false})
    previewImageUrl!: number;

    @Field(() => Int, {nullable:false})
    defaultDesignJson!: number;

    @Field(() => Int, {nullable:false})
    editableFieldsJson!: number;

    @Field(() => Int, {nullable:false})
    constraintsJson!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
