import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HomeOpsTaskTemplateSlotWhereInput } from './home-ops-task-template-slot-where.input';
import { Type } from 'class-transformer';
import { HomeOpsTaskTemplateSlotOrderByWithAggregationInput } from './home-ops-task-template-slot-order-by-with-aggregation.input';
import { HomeOpsTaskTemplateSlotScalarFieldEnum } from './home-ops-task-template-slot-scalar-field.enum';
import { HomeOpsTaskTemplateSlotScalarWhereWithAggregatesInput } from './home-ops-task-template-slot-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { HomeOpsTaskTemplateSlotCountAggregateInput } from './home-ops-task-template-slot-count-aggregate.input';
import { HomeOpsTaskTemplateSlotAvgAggregateInput } from './home-ops-task-template-slot-avg-aggregate.input';
import { HomeOpsTaskTemplateSlotSumAggregateInput } from './home-ops-task-template-slot-sum-aggregate.input';
import { HomeOpsTaskTemplateSlotMinAggregateInput } from './home-ops-task-template-slot-min-aggregate.input';
import { HomeOpsTaskTemplateSlotMaxAggregateInput } from './home-ops-task-template-slot-max-aggregate.input';

@ArgsType()
export class HomeOpsTaskTemplateSlotGroupByArgs {

    @Field(() => HomeOpsTaskTemplateSlotWhereInput, {nullable:true})
    @Type(() => HomeOpsTaskTemplateSlotWhereInput)
    where?: HomeOpsTaskTemplateSlotWhereInput;

    @Field(() => [HomeOpsTaskTemplateSlotOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<HomeOpsTaskTemplateSlotOrderByWithAggregationInput>;

    @Field(() => [HomeOpsTaskTemplateSlotScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof HomeOpsTaskTemplateSlotScalarFieldEnum>;

    @Field(() => HomeOpsTaskTemplateSlotScalarWhereWithAggregatesInput, {nullable:true})
    having?: HomeOpsTaskTemplateSlotScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => HomeOpsTaskTemplateSlotCountAggregateInput, {nullable:true})
    _count?: HomeOpsTaskTemplateSlotCountAggregateInput;

    @Field(() => HomeOpsTaskTemplateSlotAvgAggregateInput, {nullable:true})
    _avg?: HomeOpsTaskTemplateSlotAvgAggregateInput;

    @Field(() => HomeOpsTaskTemplateSlotSumAggregateInput, {nullable:true})
    _sum?: HomeOpsTaskTemplateSlotSumAggregateInput;

    @Field(() => HomeOpsTaskTemplateSlotMinAggregateInput, {nullable:true})
    _min?: HomeOpsTaskTemplateSlotMinAggregateInput;

    @Field(() => HomeOpsTaskTemplateSlotMaxAggregateInput, {nullable:true})
    _max?: HomeOpsTaskTemplateSlotMaxAggregateInput;
}
