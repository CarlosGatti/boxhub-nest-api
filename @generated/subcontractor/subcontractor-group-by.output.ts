import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { SubcontractorCountAggregate } from './subcontractor-count-aggregate.output';
import { SubcontractorAvgAggregate } from './subcontractor-avg-aggregate.output';
import { SubcontractorSumAggregate } from './subcontractor-sum-aggregate.output';
import { SubcontractorMinAggregate } from './subcontractor-min-aggregate.output';
import { SubcontractorMaxAggregate } from './subcontractor-max-aggregate.output';

@ObjectType()
export class SubcontractorGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    companyName!: string;

    @Field(() => String, {nullable:false})
    contactName!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    phone!: string;

    @Field(() => String, {nullable:false})
    trade!: string;

    @Field(() => String, {nullable:false})
    bankAccount!: string;

    @Field(() => String, {nullable:false})
    paymentPreference!: string;

    @Field(() => String, {nullable:true})
    notes?: string;

    @Field(() => Boolean, {nullable:false})
    priority!: boolean;

    @Field(() => Boolean, {nullable:false})
    createdViaPublicForm!: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => SubcontractorCountAggregate, {nullable:true})
    _count?: SubcontractorCountAggregate;

    @Field(() => SubcontractorAvgAggregate, {nullable:true})
    _avg?: SubcontractorAvgAggregate;

    @Field(() => SubcontractorSumAggregate, {nullable:true})
    _sum?: SubcontractorSumAggregate;

    @Field(() => SubcontractorMinAggregate, {nullable:true})
    _min?: SubcontractorMinAggregate;

    @Field(() => SubcontractorMaxAggregate, {nullable:true})
    _max?: SubcontractorMaxAggregate;
}
