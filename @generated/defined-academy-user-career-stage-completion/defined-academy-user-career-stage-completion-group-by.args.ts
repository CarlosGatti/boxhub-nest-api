import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyUserCareerStageCompletionWhereInput } from './defined-academy-user-career-stage-completion-where.input';
import { Type } from 'class-transformer';
import { DefinedAcademyUserCareerStageCompletionOrderByWithAggregationInput } from './defined-academy-user-career-stage-completion-order-by-with-aggregation.input';
import { DefinedAcademyUserCareerStageCompletionScalarFieldEnum } from './defined-academy-user-career-stage-completion-scalar-field.enum';
import { DefinedAcademyUserCareerStageCompletionScalarWhereWithAggregatesInput } from './defined-academy-user-career-stage-completion-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyUserCareerStageCompletionCountAggregateInput } from './defined-academy-user-career-stage-completion-count-aggregate.input';
import { DefinedAcademyUserCareerStageCompletionAvgAggregateInput } from './defined-academy-user-career-stage-completion-avg-aggregate.input';
import { DefinedAcademyUserCareerStageCompletionSumAggregateInput } from './defined-academy-user-career-stage-completion-sum-aggregate.input';
import { DefinedAcademyUserCareerStageCompletionMinAggregateInput } from './defined-academy-user-career-stage-completion-min-aggregate.input';
import { DefinedAcademyUserCareerStageCompletionMaxAggregateInput } from './defined-academy-user-career-stage-completion-max-aggregate.input';

@ArgsType()
export class DefinedAcademyUserCareerStageCompletionGroupByArgs {

    @Field(() => DefinedAcademyUserCareerStageCompletionWhereInput, {nullable:true})
    @Type(() => DefinedAcademyUserCareerStageCompletionWhereInput)
    where?: DefinedAcademyUserCareerStageCompletionWhereInput;

    @Field(() => [DefinedAcademyUserCareerStageCompletionOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<DefinedAcademyUserCareerStageCompletionOrderByWithAggregationInput>;

    @Field(() => [DefinedAcademyUserCareerStageCompletionScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof DefinedAcademyUserCareerStageCompletionScalarFieldEnum>;

    @Field(() => DefinedAcademyUserCareerStageCompletionScalarWhereWithAggregatesInput, {nullable:true})
    having?: DefinedAcademyUserCareerStageCompletionScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => DefinedAcademyUserCareerStageCompletionCountAggregateInput, {nullable:true})
    _count?: DefinedAcademyUserCareerStageCompletionCountAggregateInput;

    @Field(() => DefinedAcademyUserCareerStageCompletionAvgAggregateInput, {nullable:true})
    _avg?: DefinedAcademyUserCareerStageCompletionAvgAggregateInput;

    @Field(() => DefinedAcademyUserCareerStageCompletionSumAggregateInput, {nullable:true})
    _sum?: DefinedAcademyUserCareerStageCompletionSumAggregateInput;

    @Field(() => DefinedAcademyUserCareerStageCompletionMinAggregateInput, {nullable:true})
    _min?: DefinedAcademyUserCareerStageCompletionMinAggregateInput;

    @Field(() => DefinedAcademyUserCareerStageCompletionMaxAggregateInput, {nullable:true})
    _max?: DefinedAcademyUserCareerStageCompletionMaxAggregateInput;
}
