import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PermitInspectionWhereInput } from './permit-inspection-where.input';
import { Type } from 'class-transformer';
import { PermitInspectionOrderByWithAggregationInput } from './permit-inspection-order-by-with-aggregation.input';
import { PermitInspectionScalarFieldEnum } from './permit-inspection-scalar-field.enum';
import { PermitInspectionScalarWhereWithAggregatesInput } from './permit-inspection-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { PermitInspectionCountAggregateInput } from './permit-inspection-count-aggregate.input';
import { PermitInspectionAvgAggregateInput } from './permit-inspection-avg-aggregate.input';
import { PermitInspectionSumAggregateInput } from './permit-inspection-sum-aggregate.input';
import { PermitInspectionMinAggregateInput } from './permit-inspection-min-aggregate.input';
import { PermitInspectionMaxAggregateInput } from './permit-inspection-max-aggregate.input';

@ArgsType()
export class PermitInspectionGroupByArgs {

    @Field(() => PermitInspectionWhereInput, {nullable:true})
    @Type(() => PermitInspectionWhereInput)
    where?: PermitInspectionWhereInput;

    @Field(() => [PermitInspectionOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<PermitInspectionOrderByWithAggregationInput>;

    @Field(() => [PermitInspectionScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof PermitInspectionScalarFieldEnum>;

    @Field(() => PermitInspectionScalarWhereWithAggregatesInput, {nullable:true})
    having?: PermitInspectionScalarWhereWithAggregatesInput;

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
