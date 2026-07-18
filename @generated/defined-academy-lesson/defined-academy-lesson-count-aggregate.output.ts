import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class DefinedAcademyLessonCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    moduleId!: number;

    @Field(() => Int, {nullable:false})
    title!: number;

    @Field(() => Int, {nullable:false})
    slug!: number;

    @Field(() => Int, {nullable:false})
    summary!: number;

    @Field(() => Int, {nullable:false})
    description!: number;

    @Field(() => Int, {nullable:false})
    lessonType!: number;

    @Field(() => Int, {nullable:false})
    videoUrl!: number;

    @Field(() => Int, {nullable:false})
    videoProvider!: number;

    @Field(() => Int, {nullable:false})
    videoDurationSeconds!: number;

    @Field(() => Int, {nullable:false})
    bodyContent!: number;

    @Field(() => Int, {nullable:false})
    sortOrder!: number;

    @Field(() => Int, {nullable:false})
    status!: number;

    @Field(() => Int, {nullable:false})
    visibility!: number;

    @Field(() => Int, {nullable:false})
    isPreview!: number;

    @Field(() => Int, {nullable:false})
    publishedAt!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
