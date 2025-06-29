import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { InsuranceCountAggregate } from './insurance-count-aggregate.output';
import { InsuranceAvgAggregate } from './insurance-avg-aggregate.output';
import { InsuranceSumAggregate } from './insurance-sum-aggregate.output';
import { InsuranceMinAggregate } from './insurance-min-aggregate.output';
import { InsuranceMaxAggregate } from './insurance-max-aggregate.output';

@ObjectType()
export class InsuranceGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    subcontractorId!: number;

    @Field(() => String, {nullable:false})
    company!: string;

    @Field(() => Date, {nullable:false})
    expiration!: Date | string;

    @Field(() => String, {nullable:false})
    documentUrl!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => InsuranceCountAggregate, {nullable:true})
    _count?: InsuranceCountAggregate;

    @Field(() => InsuranceAvgAggregate, {nullable:true})
    _avg?: InsuranceAvgAggregate;

    @Field(() => InsuranceSumAggregate, {nullable:true})
    _sum?: InsuranceSumAggregate;

    @Field(() => InsuranceMinAggregate, {nullable:true})
    _min?: InsuranceMinAggregate;

    @Field(() => InsuranceMaxAggregate, {nullable:true})
    _max?: InsuranceMaxAggregate;
}
