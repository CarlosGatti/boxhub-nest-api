import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { MaterialEntryCountAggregate } from './material-entry-count-aggregate.output';
import { MaterialEntryAvgAggregate } from './material-entry-avg-aggregate.output';
import { MaterialEntrySumAggregate } from './material-entry-sum-aggregate.output';
import { MaterialEntryMinAggregate } from './material-entry-min-aggregate.output';
import { MaterialEntryMaxAggregate } from './material-entry-max-aggregate.output';

@ObjectType()
export class MaterialEntryGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    projectId!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    supplier!: string;

    @Field(() => Float, {nullable:false})
    quantity!: number;

    @Field(() => Int, {nullable:true})
    receivedById?: number;

    @Field(() => Date, {nullable:false})
    receivedAt!: Date | string;

    @Field(() => String, {nullable:true})
    note?: string;

    @Field(() => GraphQLJSON, {nullable:true})
    imageUrls?: any;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => MaterialEntryCountAggregate, {nullable:true})
    _count?: MaterialEntryCountAggregate;

    @Field(() => MaterialEntryAvgAggregate, {nullable:true})
    _avg?: MaterialEntryAvgAggregate;

    @Field(() => MaterialEntrySumAggregate, {nullable:true})
    _sum?: MaterialEntrySumAggregate;

    @Field(() => MaterialEntryMinAggregate, {nullable:true})
    _min?: MaterialEntryMinAggregate;

    @Field(() => MaterialEntryMaxAggregate, {nullable:true})
    _max?: MaterialEntryMaxAggregate;
}
