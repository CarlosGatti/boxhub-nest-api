import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedIntakeFormWhereInput } from './defined-intake-form-where.input';
import { Type } from 'class-transformer';
import { DefinedIntakeFormOrderByWithAggregationInput } from './defined-intake-form-order-by-with-aggregation.input';
import { DefinedIntakeFormScalarFieldEnum } from './defined-intake-form-scalar-field.enum';
import { DefinedIntakeFormScalarWhereWithAggregatesInput } from './defined-intake-form-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { DefinedIntakeFormCountAggregateInput } from './defined-intake-form-count-aggregate.input';
import { DefinedIntakeFormAvgAggregateInput } from './defined-intake-form-avg-aggregate.input';
import { DefinedIntakeFormSumAggregateInput } from './defined-intake-form-sum-aggregate.input';
import { DefinedIntakeFormMinAggregateInput } from './defined-intake-form-min-aggregate.input';
import { DefinedIntakeFormMaxAggregateInput } from './defined-intake-form-max-aggregate.input';

@ArgsType()
export class DefinedIntakeFormGroupByArgs {

    @Field(() => DefinedIntakeFormWhereInput, {nullable:true})
    @Type(() => DefinedIntakeFormWhereInput)
    where?: DefinedIntakeFormWhereInput;

    @Field(() => [DefinedIntakeFormOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<DefinedIntakeFormOrderByWithAggregationInput>;

    @Field(() => [DefinedIntakeFormScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof DefinedIntakeFormScalarFieldEnum>;

    @Field(() => DefinedIntakeFormScalarWhereWithAggregatesInput, {nullable:true})
    having?: DefinedIntakeFormScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => DefinedIntakeFormCountAggregateInput, {nullable:true})
    _count?: DefinedIntakeFormCountAggregateInput;

    @Field(() => DefinedIntakeFormAvgAggregateInput, {nullable:true})
    _avg?: DefinedIntakeFormAvgAggregateInput;

    @Field(() => DefinedIntakeFormSumAggregateInput, {nullable:true})
    _sum?: DefinedIntakeFormSumAggregateInput;

    @Field(() => DefinedIntakeFormMinAggregateInput, {nullable:true})
    _min?: DefinedIntakeFormMinAggregateInput;

    @Field(() => DefinedIntakeFormMaxAggregateInput, {nullable:true})
    _max?: DefinedIntakeFormMaxAggregateInput;
}
