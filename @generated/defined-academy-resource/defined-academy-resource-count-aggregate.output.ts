import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class DefinedAcademyResourceCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    academyId!: number;

    @Field(() => Int, {nullable:false})
    lessonId!: number;

    @Field(() => Int, {nullable:false})
    title!: number;

    @Field(() => Int, {nullable:false})
    description!: number;

    @Field(() => Int, {nullable:false})
    type!: number;

    @Field(() => Int, {nullable:false})
    fileUrl!: number;

    @Field(() => Int, {nullable:false})
    externalUrl!: number;

    @Field(() => Int, {nullable:false})
    textContent!: number;

    @Field(() => Int, {nullable:false})
    mimeType!: number;

    @Field(() => Int, {nullable:false})
    fileName!: number;

    @Field(() => Int, {nullable:false})
    fileSize!: number;

    @Field(() => Int, {nullable:false})
    sortOrder!: number;

    @Field(() => Int, {nullable:false})
    visibility!: number;

    @Field(() => Int, {nullable:false})
    status!: number;

    @Field(() => Int, {nullable:false})
    downloadable!: number;

    @Field(() => Int, {nullable:false})
    createdById!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
