import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ContainerWhereInput } from './container-where.input';
import { Type } from 'class-transformer';
import { ContainerOrderByWithAggregationInput } from './container-order-by-with-aggregation.input';
import { ContainerScalarFieldEnum } from './container-scalar-field.enum';
import { ContainerScalarWhereWithAggregatesInput } from './container-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ContainerCountAggregateInput } from './container-count-aggregate.input';
import { ContainerAvgAggregateInput } from './container-avg-aggregate.input';
import { ContainerSumAggregateInput } from './container-sum-aggregate.input';
import { ContainerMinAggregateInput } from './container-min-aggregate.input';
import { ContainerMaxAggregateInput } from './container-max-aggregate.input';

@ArgsType()
export class ContainerGroupByArgs {

    @Field(() => ContainerWhereInput, {nullable:true})
    @Type(() => ContainerWhereInput)
    where?: ContainerWhereInput;

    @Field(() => [ContainerOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ContainerOrderByWithAggregationInput>;

    @Field(() => [ContainerScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ContainerScalarFieldEnum>;

    @Field(() => ContainerScalarWhereWithAggregatesInput, {nullable:true})
    having?: ContainerScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ContainerCountAggregateInput, {nullable:true})
    _count?: ContainerCountAggregateInput;

    @Field(() => ContainerAvgAggregateInput, {nullable:true})
    _avg?: ContainerAvgAggregateInput;

    @Field(() => ContainerSumAggregateInput, {nullable:true})
    _sum?: ContainerSumAggregateInput;

    @Field(() => ContainerMinAggregateInput, {nullable:true})
    _min?: ContainerMinAggregateInput;

    @Field(() => ContainerMaxAggregateInput, {nullable:true})
    _max?: ContainerMaxAggregateInput;
}
