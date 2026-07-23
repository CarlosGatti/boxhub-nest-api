import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyCareerStageContentWhereInput } from './defined-academy-career-stage-content-where.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCareerStageContentOrderByWithAggregationInput } from './defined-academy-career-stage-content-order-by-with-aggregation.input';
import { DefinedAcademyCareerStageContentScalarFieldEnum } from './defined-academy-career-stage-content-scalar-field.enum';
import { DefinedAcademyCareerStageContentScalarWhereWithAggregatesInput } from './defined-academy-career-stage-content-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyCareerStageContentCountAggregateInput } from './defined-academy-career-stage-content-count-aggregate.input';
import { DefinedAcademyCareerStageContentAvgAggregateInput } from './defined-academy-career-stage-content-avg-aggregate.input';
import { DefinedAcademyCareerStageContentSumAggregateInput } from './defined-academy-career-stage-content-sum-aggregate.input';
import { DefinedAcademyCareerStageContentMinAggregateInput } from './defined-academy-career-stage-content-min-aggregate.input';
import { DefinedAcademyCareerStageContentMaxAggregateInput } from './defined-academy-career-stage-content-max-aggregate.input';

@ArgsType()
export class DefinedAcademyCareerStageContentGroupByArgs {

    @Field(() => DefinedAcademyCareerStageContentWhereInput, {nullable:true})
    @Type(() => DefinedAcademyCareerStageContentWhereInput)
    where?: DefinedAcademyCareerStageContentWhereInput;

    @Field(() => [DefinedAcademyCareerStageContentOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<DefinedAcademyCareerStageContentOrderByWithAggregationInput>;

    @Field(() => [DefinedAcademyCareerStageContentScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof DefinedAcademyCareerStageContentScalarFieldEnum>;

    @Field(() => DefinedAcademyCareerStageContentScalarWhereWithAggregatesInput, {nullable:true})
    having?: DefinedAcademyCareerStageContentScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => DefinedAcademyCareerStageContentCountAggregateInput, {nullable:true})
    _count?: DefinedAcademyCareerStageContentCountAggregateInput;

    @Field(() => DefinedAcademyCareerStageContentAvgAggregateInput, {nullable:true})
    _avg?: DefinedAcademyCareerStageContentAvgAggregateInput;

    @Field(() => DefinedAcademyCareerStageContentSumAggregateInput, {nullable:true})
    _sum?: DefinedAcademyCareerStageContentSumAggregateInput;

    @Field(() => DefinedAcademyCareerStageContentMinAggregateInput, {nullable:true})
    _min?: DefinedAcademyCareerStageContentMinAggregateInput;

    @Field(() => DefinedAcademyCareerStageContentMaxAggregateInput, {nullable:true})
    _max?: DefinedAcademyCareerStageContentMaxAggregateInput;
}
