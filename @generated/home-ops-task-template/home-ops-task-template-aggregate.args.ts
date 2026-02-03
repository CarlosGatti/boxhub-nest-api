import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HomeOpsTaskTemplateWhereInput } from './home-ops-task-template-where.input';
import { Type } from 'class-transformer';
import { HomeOpsTaskTemplateOrderByWithRelationInput } from './home-ops-task-template-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { HomeOpsTaskTemplateWhereUniqueInput } from './home-ops-task-template-where-unique.input';
import { Int } from '@nestjs/graphql';
import { HomeOpsTaskTemplateCountAggregateInput } from './home-ops-task-template-count-aggregate.input';
import { HomeOpsTaskTemplateAvgAggregateInput } from './home-ops-task-template-avg-aggregate.input';
import { HomeOpsTaskTemplateSumAggregateInput } from './home-ops-task-template-sum-aggregate.input';
import { HomeOpsTaskTemplateMinAggregateInput } from './home-ops-task-template-min-aggregate.input';
import { HomeOpsTaskTemplateMaxAggregateInput } from './home-ops-task-template-max-aggregate.input';

@ArgsType()
export class HomeOpsTaskTemplateAggregateArgs {

    @Field(() => HomeOpsTaskTemplateWhereInput, {nullable:true})
    @Type(() => HomeOpsTaskTemplateWhereInput)
    where?: HomeOpsTaskTemplateWhereInput;

    @Field(() => [HomeOpsTaskTemplateOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<HomeOpsTaskTemplateOrderByWithRelationInput>;

    @Field(() => HomeOpsTaskTemplateWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<HomeOpsTaskTemplateWhereUniqueInput, 'id'>;

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
