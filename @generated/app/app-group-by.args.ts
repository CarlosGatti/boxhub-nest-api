import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AppWhereInput } from './app-where.input';
import { Type } from 'class-transformer';
import { AppOrderByWithAggregationInput } from './app-order-by-with-aggregation.input';
import { AppScalarFieldEnum } from './app-scalar-field.enum';
import { AppScalarWhereWithAggregatesInput } from './app-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { AppCountAggregateInput } from './app-count-aggregate.input';
import { AppAvgAggregateInput } from './app-avg-aggregate.input';
import { AppSumAggregateInput } from './app-sum-aggregate.input';
import { AppMinAggregateInput } from './app-min-aggregate.input';
import { AppMaxAggregateInput } from './app-max-aggregate.input';

@ArgsType()
export class AppGroupByArgs {

    @Field(() => AppWhereInput, {nullable:true})
    @Type(() => AppWhereInput)
    where?: AppWhereInput;

    @Field(() => [AppOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<AppOrderByWithAggregationInput>;

    @Field(() => [AppScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof AppScalarFieldEnum>;

    @Field(() => AppScalarWhereWithAggregatesInput, {nullable:true})
    having?: AppScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => AppCountAggregateInput, {nullable:true})
    _count?: AppCountAggregateInput;

    @Field(() => AppAvgAggregateInput, {nullable:true})
    _avg?: AppAvgAggregateInput;

    @Field(() => AppSumAggregateInput, {nullable:true})
    _sum?: AppSumAggregateInput;

    @Field(() => AppMinAggregateInput, {nullable:true})
    _min?: AppMinAggregateInput;

    @Field(() => AppMaxAggregateInput, {nullable:true})
    _max?: AppMaxAggregateInput;
}
