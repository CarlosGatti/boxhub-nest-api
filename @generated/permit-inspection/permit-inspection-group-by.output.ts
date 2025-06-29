import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PermitKind } from '../prisma/permit-kind.enum';
import { PermitStatus } from '../prisma/permit-status.enum';
import { PermitInspectionCountAggregate } from './permit-inspection-count-aggregate.output';
import { PermitInspectionAvgAggregate } from './permit-inspection-avg-aggregate.output';
import { PermitInspectionSumAggregate } from './permit-inspection-sum-aggregate.output';
import { PermitInspectionMinAggregate } from './permit-inspection-min-aggregate.output';
import { PermitInspectionMaxAggregate } from './permit-inspection-max-aggregate.output';

@ObjectType()
export class PermitInspectionGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    projectId!: number;

    @Field(() => String, {nullable:false})
    number!: string;

    @Field(() => PermitKind, {nullable:false})
    kind!: keyof typeof PermitKind;

    @Field(() => PermitStatus, {nullable:false})
    status!: keyof typeof PermitStatus;

    @Field(() => Date, {nullable:true})
    requestedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    approvedAt?: Date | string;

    @Field(() => String, {nullable:true})
    fileUrl?: string;

    @Field(() => Int, {nullable:true})
    responsibleId?: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => PermitInspectionCountAggregate, {nullable:true})
    _count?: PermitInspectionCountAggregate;

    @Field(() => PermitInspectionAvgAggregate, {nullable:true})
    _avg?: PermitInspectionAvgAggregate;

    @Field(() => PermitInspectionSumAggregate, {nullable:true})
    _sum?: PermitInspectionSumAggregate;

    @Field(() => PermitInspectionMinAggregate, {nullable:true})
    _min?: PermitInspectionMinAggregate;

    @Field(() => PermitInspectionMaxAggregate, {nullable:true})
    _max?: PermitInspectionMaxAggregate;
}
