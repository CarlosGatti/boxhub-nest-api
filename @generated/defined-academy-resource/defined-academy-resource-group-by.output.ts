import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyResourceType } from '../prisma/defined-academy-resource-type.enum';
import { DefinedAcademyCourseVisibility } from '../prisma/defined-academy-course-visibility.enum';
import { DefinedAcademyResourceStatus } from '../prisma/defined-academy-resource-status.enum';
import { DefinedAcademyResourceCountAggregate } from './defined-academy-resource-count-aggregate.output';
import { DefinedAcademyResourceAvgAggregate } from './defined-academy-resource-avg-aggregate.output';
import { DefinedAcademyResourceSumAggregate } from './defined-academy-resource-sum-aggregate.output';
import { DefinedAcademyResourceMinAggregate } from './defined-academy-resource-min-aggregate.output';
import { DefinedAcademyResourceMaxAggregate } from './defined-academy-resource-max-aggregate.output';

@ObjectType()
export class DefinedAcademyResourceGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    academyId!: number;

    @Field(() => Int, {nullable:true})
    lessonId?: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => DefinedAcademyResourceType, {nullable:false})
    type!: keyof typeof DefinedAcademyResourceType;

    @Field(() => String, {nullable:true})
    fileUrl?: string;

    @Field(() => String, {nullable:true})
    externalUrl?: string;

    @Field(() => String, {nullable:true})
    textContent?: string;

    @Field(() => String, {nullable:true})
    mimeType?: string;

    @Field(() => String, {nullable:true})
    fileName?: string;

    @Field(() => Int, {nullable:true})
    fileSize?: number;

    @Field(() => Int, {nullable:false})
    sortOrder!: number;

    @Field(() => DefinedAcademyCourseVisibility, {nullable:false})
    visibility!: keyof typeof DefinedAcademyCourseVisibility;

    @Field(() => DefinedAcademyResourceStatus, {nullable:false})
    status!: keyof typeof DefinedAcademyResourceStatus;

    @Field(() => Boolean, {nullable:false})
    downloadable!: boolean;

    @Field(() => Int, {nullable:true})
    createdById?: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => DefinedAcademyResourceCountAggregate, {nullable:true})
    _count?: DefinedAcademyResourceCountAggregate;

    @Field(() => DefinedAcademyResourceAvgAggregate, {nullable:true})
    _avg?: DefinedAcademyResourceAvgAggregate;

    @Field(() => DefinedAcademyResourceSumAggregate, {nullable:true})
    _sum?: DefinedAcademyResourceSumAggregate;

    @Field(() => DefinedAcademyResourceMinAggregate, {nullable:true})
    _min?: DefinedAcademyResourceMinAggregate;

    @Field(() => DefinedAcademyResourceMaxAggregate, {nullable:true})
    _max?: DefinedAcademyResourceMaxAggregate;
}
