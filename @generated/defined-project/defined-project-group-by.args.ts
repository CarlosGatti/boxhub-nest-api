import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedProjectWhereInput } from './defined-project-where.input';
import { Type } from 'class-transformer';
import { DefinedProjectOrderByWithAggregationInput } from './defined-project-order-by-with-aggregation.input';
import { DefinedProjectScalarFieldEnum } from './defined-project-scalar-field.enum';
import { DefinedProjectScalarWhereWithAggregatesInput } from './defined-project-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { DefinedProjectCountAggregateInput } from './defined-project-count-aggregate.input';
import { DefinedProjectAvgAggregateInput } from './defined-project-avg-aggregate.input';
import { DefinedProjectSumAggregateInput } from './defined-project-sum-aggregate.input';
import { DefinedProjectMinAggregateInput } from './defined-project-min-aggregate.input';
import { DefinedProjectMaxAggregateInput } from './defined-project-max-aggregate.input';

@ArgsType()
export class DefinedProjectGroupByArgs {

    @Field(() => DefinedProjectWhereInput, {nullable:true})
    @Type(() => DefinedProjectWhereInput)
    where?: DefinedProjectWhereInput;

    @Field(() => [DefinedProjectOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<DefinedProjectOrderByWithAggregationInput>;

    @Field(() => [DefinedProjectScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof DefinedProjectScalarFieldEnum>;

    @Field(() => DefinedProjectScalarWhereWithAggregatesInput, {nullable:true})
    having?: DefinedProjectScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => DefinedProjectCountAggregateInput, {nullable:true})
    _count?: DefinedProjectCountAggregateInput;

    @Field(() => DefinedProjectAvgAggregateInput, {nullable:true})
    _avg?: DefinedProjectAvgAggregateInput;

    @Field(() => DefinedProjectSumAggregateInput, {nullable:true})
    _sum?: DefinedProjectSumAggregateInput;

    @Field(() => DefinedProjectMinAggregateInput, {nullable:true})
    _min?: DefinedProjectMinAggregateInput;

    @Field(() => DefinedProjectMaxAggregateInput, {nullable:true})
    _max?: DefinedProjectMaxAggregateInput;
}
