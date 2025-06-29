import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PermitInspectionWhereInput } from './permit-inspection-where.input';
import { Type } from 'class-transformer';
import { PermitInspectionOrderByWithRelationInput } from './permit-inspection-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { PermitInspectionWhereUniqueInput } from './permit-inspection-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PermitInspectionCountAggregateInput } from './permit-inspection-count-aggregate.input';
import { PermitInspectionAvgAggregateInput } from './permit-inspection-avg-aggregate.input';
import { PermitInspectionSumAggregateInput } from './permit-inspection-sum-aggregate.input';
import { PermitInspectionMinAggregateInput } from './permit-inspection-min-aggregate.input';
import { PermitInspectionMaxAggregateInput } from './permit-inspection-max-aggregate.input';

@ArgsType()
export class PermitInspectionAggregateArgs {

    @Field(() => PermitInspectionWhereInput, {nullable:true})
    @Type(() => PermitInspectionWhereInput)
    where?: PermitInspectionWhereInput;

    @Field(() => [PermitInspectionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PermitInspectionOrderByWithRelationInput>;

    @Field(() => PermitInspectionWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PermitInspectionWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PermitInspectionCountAggregateInput, {nullable:true})
    _count?: PermitInspectionCountAggregateInput;

    @Field(() => PermitInspectionAvgAggregateInput, {nullable:true})
    _avg?: PermitInspectionAvgAggregateInput;

    @Field(() => PermitInspectionSumAggregateInput, {nullable:true})
    _sum?: PermitInspectionSumAggregateInput;

    @Field(() => PermitInspectionMinAggregateInput, {nullable:true})
    _min?: PermitInspectionMinAggregateInput;

    @Field(() => PermitInspectionMaxAggregateInput, {nullable:true})
    _max?: PermitInspectionMaxAggregateInput;
}
