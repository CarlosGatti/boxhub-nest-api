import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MaterialEntryWhereInput } from './material-entry-where.input';
import { Type } from 'class-transformer';
import { MaterialEntryOrderByWithAggregationInput } from './material-entry-order-by-with-aggregation.input';
import { MaterialEntryScalarFieldEnum } from './material-entry-scalar-field.enum';
import { MaterialEntryScalarWhereWithAggregatesInput } from './material-entry-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { MaterialEntryCountAggregateInput } from './material-entry-count-aggregate.input';
import { MaterialEntryAvgAggregateInput } from './material-entry-avg-aggregate.input';
import { MaterialEntrySumAggregateInput } from './material-entry-sum-aggregate.input';
import { MaterialEntryMinAggregateInput } from './material-entry-min-aggregate.input';
import { MaterialEntryMaxAggregateInput } from './material-entry-max-aggregate.input';

@ArgsType()
export class MaterialEntryGroupByArgs {

    @Field(() => MaterialEntryWhereInput, {nullable:true})
    @Type(() => MaterialEntryWhereInput)
    where?: MaterialEntryWhereInput;

    @Field(() => [MaterialEntryOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<MaterialEntryOrderByWithAggregationInput>;

    @Field(() => [MaterialEntryScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof MaterialEntryScalarFieldEnum>;

    @Field(() => MaterialEntryScalarWhereWithAggregatesInput, {nullable:true})
    having?: MaterialEntryScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => MaterialEntryCountAggregateInput, {nullable:true})
    _count?: MaterialEntryCountAggregateInput;

    @Field(() => MaterialEntryAvgAggregateInput, {nullable:true})
    _avg?: MaterialEntryAvgAggregateInput;

    @Field(() => MaterialEntrySumAggregateInput, {nullable:true})
    _sum?: MaterialEntrySumAggregateInput;

    @Field(() => MaterialEntryMinAggregateInput, {nullable:true})
    _min?: MaterialEntryMinAggregateInput;

    @Field(() => MaterialEntryMaxAggregateInput, {nullable:true})
    _max?: MaterialEntryMaxAggregateInput;
}
