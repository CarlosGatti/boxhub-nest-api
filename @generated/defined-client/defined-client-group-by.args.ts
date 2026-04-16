import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedClientWhereInput } from './defined-client-where.input';
import { Type } from 'class-transformer';
import { DefinedClientOrderByWithAggregationInput } from './defined-client-order-by-with-aggregation.input';
import { DefinedClientScalarFieldEnum } from './defined-client-scalar-field.enum';
import { DefinedClientScalarWhereWithAggregatesInput } from './defined-client-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { DefinedClientCountAggregateInput } from './defined-client-count-aggregate.input';
import { DefinedClientAvgAggregateInput } from './defined-client-avg-aggregate.input';
import { DefinedClientSumAggregateInput } from './defined-client-sum-aggregate.input';
import { DefinedClientMinAggregateInput } from './defined-client-min-aggregate.input';
import { DefinedClientMaxAggregateInput } from './defined-client-max-aggregate.input';

@ArgsType()
export class DefinedClientGroupByArgs {

    @Field(() => DefinedClientWhereInput, {nullable:true})
    @Type(() => DefinedClientWhereInput)
    where?: DefinedClientWhereInput;

    @Field(() => [DefinedClientOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<DefinedClientOrderByWithAggregationInput>;

    @Field(() => [DefinedClientScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof DefinedClientScalarFieldEnum>;

    @Field(() => DefinedClientScalarWhereWithAggregatesInput, {nullable:true})
    having?: DefinedClientScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => DefinedClientCountAggregateInput, {nullable:true})
    _count?: DefinedClientCountAggregateInput;

    @Field(() => DefinedClientAvgAggregateInput, {nullable:true})
    _avg?: DefinedClientAvgAggregateInput;

    @Field(() => DefinedClientSumAggregateInput, {nullable:true})
    _sum?: DefinedClientSumAggregateInput;

    @Field(() => DefinedClientMinAggregateInput, {nullable:true})
    _min?: DefinedClientMinAggregateInput;

    @Field(() => DefinedClientMaxAggregateInput, {nullable:true})
    _max?: DefinedClientMaxAggregateInput;
}
