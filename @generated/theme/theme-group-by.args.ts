import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ThemeWhereInput } from './theme-where.input';
import { Type } from 'class-transformer';
import { ThemeOrderByWithAggregationInput } from './theme-order-by-with-aggregation.input';
import { ThemeScalarFieldEnum } from './theme-scalar-field.enum';
import { ThemeScalarWhereWithAggregatesInput } from './theme-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ThemeCountAggregateInput } from './theme-count-aggregate.input';
import { ThemeAvgAggregateInput } from './theme-avg-aggregate.input';
import { ThemeSumAggregateInput } from './theme-sum-aggregate.input';
import { ThemeMinAggregateInput } from './theme-min-aggregate.input';
import { ThemeMaxAggregateInput } from './theme-max-aggregate.input';

@ArgsType()
export class ThemeGroupByArgs {

    @Field(() => ThemeWhereInput, {nullable:true})
    @Type(() => ThemeWhereInput)
    where?: ThemeWhereInput;

    @Field(() => [ThemeOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ThemeOrderByWithAggregationInput>;

    @Field(() => [ThemeScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ThemeScalarFieldEnum>;

    @Field(() => ThemeScalarWhereWithAggregatesInput, {nullable:true})
    having?: ThemeScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ThemeCountAggregateInput, {nullable:true})
    _count?: ThemeCountAggregateInput;

    @Field(() => ThemeAvgAggregateInput, {nullable:true})
    _avg?: ThemeAvgAggregateInput;

    @Field(() => ThemeSumAggregateInput, {nullable:true})
    _sum?: ThemeSumAggregateInput;

    @Field(() => ThemeMinAggregateInput, {nullable:true})
    _min?: ThemeMinAggregateInput;

    @Field(() => ThemeMaxAggregateInput, {nullable:true})
    _max?: ThemeMaxAggregateInput;
}
