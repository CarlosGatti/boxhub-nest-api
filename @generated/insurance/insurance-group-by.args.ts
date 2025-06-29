import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { InsuranceWhereInput } from './insurance-where.input';
import { Type } from 'class-transformer';
import { InsuranceOrderByWithAggregationInput } from './insurance-order-by-with-aggregation.input';
import { InsuranceScalarFieldEnum } from './insurance-scalar-field.enum';
import { InsuranceScalarWhereWithAggregatesInput } from './insurance-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { InsuranceCountAggregateInput } from './insurance-count-aggregate.input';
import { InsuranceAvgAggregateInput } from './insurance-avg-aggregate.input';
import { InsuranceSumAggregateInput } from './insurance-sum-aggregate.input';
import { InsuranceMinAggregateInput } from './insurance-min-aggregate.input';
import { InsuranceMaxAggregateInput } from './insurance-max-aggregate.input';

@ArgsType()
export class InsuranceGroupByArgs {

    @Field(() => InsuranceWhereInput, {nullable:true})
    @Type(() => InsuranceWhereInput)
    where?: InsuranceWhereInput;

    @Field(() => [InsuranceOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<InsuranceOrderByWithAggregationInput>;

    @Field(() => [InsuranceScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof InsuranceScalarFieldEnum>;

    @Field(() => InsuranceScalarWhereWithAggregatesInput, {nullable:true})
    having?: InsuranceScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => InsuranceCountAggregateInput, {nullable:true})
    _count?: InsuranceCountAggregateInput;

    @Field(() => InsuranceAvgAggregateInput, {nullable:true})
    _avg?: InsuranceAvgAggregateInput;

    @Field(() => InsuranceSumAggregateInput, {nullable:true})
    _sum?: InsuranceSumAggregateInput;

    @Field(() => InsuranceMinAggregateInput, {nullable:true})
    _min?: InsuranceMinAggregateInput;

    @Field(() => InsuranceMaxAggregateInput, {nullable:true})
    _max?: InsuranceMaxAggregateInput;
}
