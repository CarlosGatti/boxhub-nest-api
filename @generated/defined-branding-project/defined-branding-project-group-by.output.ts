import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedBrandingProjectStatus } from '../prisma/defined-branding-project-status.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { DefinedBrandingProjectCountAggregate } from './defined-branding-project-count-aggregate.output';
import { DefinedBrandingProjectAvgAggregate } from './defined-branding-project-avg-aggregate.output';
import { DefinedBrandingProjectSumAggregate } from './defined-branding-project-sum-aggregate.output';
import { DefinedBrandingProjectMinAggregate } from './defined-branding-project-min-aggregate.output';
import { DefinedBrandingProjectMaxAggregate } from './defined-branding-project-max-aggregate.output';

@ObjectType()
export class DefinedBrandingProjectGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    clientId!: number;

    @Field(() => Int, {nullable:true})
    projectId?: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => String, {nullable:true})
    concept?: string;

    @Field(() => DefinedBrandingProjectStatus, {nullable:false})
    status!: keyof typeof DefinedBrandingProjectStatus;

    @Field(() => Boolean, {nullable:false})
    isPublic!: boolean;

    @Field(() => Date, {nullable:true})
    publishedAt?: Date | string;

    @Field(() => Boolean, {nullable:false})
    isFeatured!: boolean;

    @Field(() => String, {nullable:true})
    coverImageUrl?: string;

    @Field(() => String, {nullable:true})
    brandManualPdfUrl?: string;

    @Field(() => String, {nullable:true})
    sourcePdfFileName?: string;

    @Field(() => GraphQLJSON, {nullable:true})
    metadata?: any;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => DefinedBrandingProjectCountAggregate, {nullable:true})
    _count?: DefinedBrandingProjectCountAggregate;

    @Field(() => DefinedBrandingProjectAvgAggregate, {nullable:true})
    _avg?: DefinedBrandingProjectAvgAggregate;

    @Field(() => DefinedBrandingProjectSumAggregate, {nullable:true})
    _sum?: DefinedBrandingProjectSumAggregate;

    @Field(() => DefinedBrandingProjectMinAggregate, {nullable:true})
    _min?: DefinedBrandingProjectMinAggregate;

    @Field(() => DefinedBrandingProjectMaxAggregate, {nullable:true})
    _max?: DefinedBrandingProjectMaxAggregate;
}
