import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HomeOpsTaskTemplateWhereInput } from './home-ops-task-template-where.input';
import { Type } from 'class-transformer';
import { HomeOpsTaskTemplateOrderByWithAggregationInput } from './home-ops-task-template-order-by-with-aggregation.input';
import { HomeOpsTaskTemplateScalarFieldEnum } from './home-ops-task-template-scalar-field.enum';
import { HomeOpsTaskTemplateScalarWhereWithAggregatesInput } from './home-ops-task-template-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { HomeOpsTaskTemplateCountAggregateInput } from './home-ops-task-template-count-aggregate.input';
import { HomeOpsTaskTemplateAvgAggregateInput } from './home-ops-task-template-avg-aggregate.input';
import { HomeOpsTaskTemplateSumAggregateInput } from './home-ops-task-template-sum-aggregate.input';
import { HomeOpsTaskTemplateMinAggregateInput } from './home-ops-task-template-min-aggregate.input';
import { HomeOpsTaskTemplateMaxAggregateInput } from './home-ops-task-template-max-aggregate.input';

@ArgsType()
export class HomeOpsTaskTemplateGroupByArgs {

    @Field(() => HomeOpsTaskTemplateWhereInput, {nullable:true})
    @Type(() => HomeOpsTaskTemplateWhereInput)
    where?: HomeOpsTaskTemplateWhereInput;

    @Field(() => [HomeOpsTaskTemplateOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<HomeOpsTaskTemplateOrderByWithAggregationInput>;

    @Field(() => [HomeOpsTaskTemplateScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof HomeOpsTaskTemplateScalarFieldEnum>;

    @Field(() => HomeOpsTaskTemplateScalarWhereWithAggregatesInput, {nullable:true})
    having?: HomeOpsTaskTemplateScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => HomeOpsTaskTemplateCountAggregateInput, {nullable:true})
    _count?: HomeOpsTaskTemplateCountAggregateInput;

    @Field(() => HomeOpsTaskTemplateAvgAggregateInput, {nullable:true})
    _avg?: HomeOpsTaskTemplateAvgAggregateInput;

    @Field(() => HomeOpsTaskTemplateSumAggregateInput, {nullable:true})
    _sum?: HomeOpsTaskTemplateSumAggregateInput;

    @Field(() => HomeOpsTaskTemplateMinAggregateInput, {nullable:true})
    _min?: HomeOpsTaskTemplateMinAggregateInput;

    @Field(() => HomeOpsTaskTemplateMaxAggregateInput, {nullable:true})
    _max?: HomeOpsTaskTemplateMaxAggregateInput;
}
