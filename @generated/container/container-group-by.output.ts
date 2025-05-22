import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ContainerCountAggregate } from './container-count-aggregate.output';
import { ContainerAvgAggregate } from './container-avg-aggregate.output';
import { ContainerSumAggregate } from './container-sum-aggregate.output';
import { ContainerMinAggregate } from './container-min-aggregate.output';
import { ContainerMaxAggregate } from './container-max-aggregate.output';

@ObjectType()
export class ContainerGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => String, {nullable:false})
    qrCode!: string;

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => Int, {nullable:false})
    storageId!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => ContainerCountAggregate, {nullable:true})
    _count?: ContainerCountAggregate;

    @Field(() => ContainerAvgAggregate, {nullable:true})
    _avg?: ContainerAvgAggregate;

    @Field(() => ContainerSumAggregate, {nullable:true})
    _sum?: ContainerSumAggregate;

    @Field(() => ContainerMinAggregate, {nullable:true})
    _min?: ContainerMinAggregate;

    @Field(() => ContainerMaxAggregate, {nullable:true})
    _max?: ContainerMaxAggregate;
}
