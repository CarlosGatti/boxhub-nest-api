import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyStatus } from '../prisma/defined-academy-status.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { DefinedAcademyCountAggregate } from './defined-academy-count-aggregate.output';
import { DefinedAcademyAvgAggregate } from './defined-academy-avg-aggregate.output';
import { DefinedAcademySumAggregate } from './defined-academy-sum-aggregate.output';
import { DefinedAcademyMinAggregate } from './defined-academy-min-aggregate.output';
import { DefinedAcademyMaxAggregate } from './defined-academy-max-aggregate.output';

@ObjectType()
export class DefinedAcademyGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:true})
    appId?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => DefinedAcademyStatus, {nullable:false})
    status!: keyof typeof DefinedAcademyStatus;

    @Field(() => String, {nullable:true})
    logoUrl?: string;

    @Field(() => GraphQLJSON, {nullable:true})
    settings?: any;

    @Field(() => Date, {nullable:true})
    publishedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    archivedAt?: Date | string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => DefinedAcademyCountAggregate, {nullable:true})
    _count?: DefinedAcademyCountAggregate;

    @Field(() => DefinedAcademyAvgAggregate, {nullable:true})
    _avg?: DefinedAcademyAvgAggregate;

    @Field(() => DefinedAcademySumAggregate, {nullable:true})
    _sum?: DefinedAcademySumAggregate;

    @Field(() => DefinedAcademyMinAggregate, {nullable:true})
    _min?: DefinedAcademyMinAggregate;

    @Field(() => DefinedAcademyMaxAggregate, {nullable:true})
    _max?: DefinedAcademyMaxAggregate;
}
