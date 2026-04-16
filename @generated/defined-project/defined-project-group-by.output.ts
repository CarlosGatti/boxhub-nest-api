import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedProjectServiceType } from '../prisma/defined-project-service-type.enum';
import { DefinedProjectStatus } from '../prisma/defined-project-status.enum';
import { Float } from '@nestjs/graphql';
import { DefinedProjectCountAggregate } from './defined-project-count-aggregate.output';
import { DefinedProjectAvgAggregate } from './defined-project-avg-aggregate.output';
import { DefinedProjectSumAggregate } from './defined-project-sum-aggregate.output';
import { DefinedProjectMinAggregate } from './defined-project-min-aggregate.output';
import { DefinedProjectMaxAggregate } from './defined-project-max-aggregate.output';

@ObjectType()
export class DefinedProjectGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    clientId!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => DefinedProjectServiceType, {nullable:false})
    serviceType!: keyof typeof DefinedProjectServiceType;

    @Field(() => DefinedProjectStatus, {nullable:false})
    status!: keyof typeof DefinedProjectStatus;

    @Field(() => Float, {nullable:true})
    budget?: number;

    @Field(() => Date, {nullable:true})
    deadline?: Date | string;

    @Field(() => String, {nullable:true})
    source?: string;

    @Field(() => String, {nullable:true})
    assignedTo?: string;

    @Field(() => Int, {nullable:true})
    supplierId?: number;

    @Field(() => String, {nullable:true})
    notes?: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => DefinedProjectCountAggregate, {nullable:true})
    _count?: DefinedProjectCountAggregate;

    @Field(() => DefinedProjectAvgAggregate, {nullable:true})
    _avg?: DefinedProjectAvgAggregate;

    @Field(() => DefinedProjectSumAggregate, {nullable:true})
    _sum?: DefinedProjectSumAggregate;

    @Field(() => DefinedProjectMinAggregate, {nullable:true})
    _min?: DefinedProjectMinAggregate;

    @Field(() => DefinedProjectMaxAggregate, {nullable:true})
    _max?: DefinedProjectMaxAggregate;
}
