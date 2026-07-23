import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyUserCareerStageCompletionWhereInput } from './defined-academy-user-career-stage-completion-where.input';
import { Type } from 'class-transformer';
import { DefinedAcademyUserCareerStageCompletionOrderByWithRelationInput } from './defined-academy-user-career-stage-completion-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyUserCareerStageCompletionWhereUniqueInput } from './defined-academy-user-career-stage-completion-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyUserCareerStageCompletionCountAggregateInput } from './defined-academy-user-career-stage-completion-count-aggregate.input';
import { DefinedAcademyUserCareerStageCompletionAvgAggregateInput } from './defined-academy-user-career-stage-completion-avg-aggregate.input';
import { DefinedAcademyUserCareerStageCompletionSumAggregateInput } from './defined-academy-user-career-stage-completion-sum-aggregate.input';
import { DefinedAcademyUserCareerStageCompletionMinAggregateInput } from './defined-academy-user-career-stage-completion-min-aggregate.input';
import { DefinedAcademyUserCareerStageCompletionMaxAggregateInput } from './defined-academy-user-career-stage-completion-max-aggregate.input';

@ArgsType()
export class DefinedAcademyUserCareerStageCompletionAggregateArgs {

    @Field(() => DefinedAcademyUserCareerStageCompletionWhereInput, {nullable:true})
    @Type(() => DefinedAcademyUserCareerStageCompletionWhereInput)
    where?: DefinedAcademyUserCareerStageCompletionWhereInput;

    @Field(() => [DefinedAcademyUserCareerStageCompletionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DefinedAcademyUserCareerStageCompletionOrderByWithRelationInput>;

    @Field(() => DefinedAcademyUserCareerStageCompletionWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<DefinedAcademyUserCareerStageCompletionWhereUniqueInput, 'id' | 'profileId_stageId'>;

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
