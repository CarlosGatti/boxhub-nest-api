import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedBrandingSectionType } from '../prisma/defined-branding-section-type.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { DefinedBrandingSectionCountAggregate } from './defined-branding-section-count-aggregate.output';
import { DefinedBrandingSectionAvgAggregate } from './defined-branding-section-avg-aggregate.output';
import { DefinedBrandingSectionSumAggregate } from './defined-branding-section-sum-aggregate.output';
import { DefinedBrandingSectionMinAggregate } from './defined-branding-section-min-aggregate.output';
import { DefinedBrandingSectionMaxAggregate } from './defined-branding-section-max-aggregate.output';

@ObjectType()
export class DefinedBrandingSectionGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    brandingProjectId!: number;

    @Field(() => DefinedBrandingSectionType, {nullable:false})
    type!: keyof typeof DefinedBrandingSectionType;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    body?: string;

    @Field(() => GraphQLJSON, {nullable:true})
    contentJson?: any;

    @Field(() => Int, {nullable:false})
    order!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => DefinedBrandingSectionCountAggregate, {nullable:true})
    _count?: DefinedBrandingSectionCountAggregate;

    @Field(() => DefinedBrandingSectionAvgAggregate, {nullable:true})
    _avg?: DefinedBrandingSectionAvgAggregate;

    @Field(() => DefinedBrandingSectionSumAggregate, {nullable:true})
    _sum?: DefinedBrandingSectionSumAggregate;

    @Field(() => DefinedBrandingSectionMinAggregate, {nullable:true})
    _min?: DefinedBrandingSectionMinAggregate;

    @Field(() => DefinedBrandingSectionMaxAggregate, {nullable:true})
    _max?: DefinedBrandingSectionMaxAggregate;
}
