import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ReviewCardExportType } from '../prisma/review-card-export-type.enum';
import { ReviewCardExportStatus } from '../prisma/review-card-export-status.enum';
import { ReviewCardExportCountAggregate } from './review-card-export-count-aggregate.output';
import { ReviewCardExportAvgAggregate } from './review-card-export-avg-aggregate.output';
import { ReviewCardExportSumAggregate } from './review-card-export-sum-aggregate.output';
import { ReviewCardExportMinAggregate } from './review-card-export-min-aggregate.output';
import { ReviewCardExportMaxAggregate } from './review-card-export-max-aggregate.output';

@ObjectType()
export class ReviewCardExportGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    projectId!: number;

    @Field(() => ReviewCardExportType, {nullable:false})
    type!: keyof typeof ReviewCardExportType;

    @Field(() => String, {nullable:false})
    format!: string;

    @Field(() => ReviewCardExportStatus, {nullable:false})
    status!: keyof typeof ReviewCardExportStatus;

    @Field(() => String, {nullable:true})
    fileUrl?: string;

    @Field(() => String, {nullable:true})
    errorMessage?: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => ReviewCardExportCountAggregate, {nullable:true})
    _count?: ReviewCardExportCountAggregate;

    @Field(() => ReviewCardExportAvgAggregate, {nullable:true})
    _avg?: ReviewCardExportAvgAggregate;

    @Field(() => ReviewCardExportSumAggregate, {nullable:true})
    _sum?: ReviewCardExportSumAggregate;

    @Field(() => ReviewCardExportMinAggregate, {nullable:true})
    _min?: ReviewCardExportMinAggregate;

    @Field(() => ReviewCardExportMaxAggregate, {nullable:true})
    _max?: ReviewCardExportMaxAggregate;
}
