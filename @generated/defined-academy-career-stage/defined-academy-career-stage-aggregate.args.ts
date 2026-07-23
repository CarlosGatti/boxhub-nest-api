import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyCareerStageWhereInput } from './defined-academy-career-stage-where.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCareerStageOrderByWithRelationInput } from './defined-academy-career-stage-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyCareerStageWhereUniqueInput } from './defined-academy-career-stage-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyCareerStageCountAggregateInput } from './defined-academy-career-stage-count-aggregate.input';
import { DefinedAcademyCareerStageAvgAggregateInput } from './defined-academy-career-stage-avg-aggregate.input';
import { DefinedAcademyCareerStageSumAggregateInput } from './defined-academy-career-stage-sum-aggregate.input';
import { DefinedAcademyCareerStageMinAggregateInput } from './defined-academy-career-stage-min-aggregate.input';
import { DefinedAcademyCareerStageMaxAggregateInput } from './defined-academy-career-stage-max-aggregate.input';

@ArgsType()
export class DefinedAcademyCareerStageAggregateArgs {

    @Field(() => DefinedAcademyCareerStageWhereInput, {nullable:true})
    @Type(() => DefinedAcademyCareerStageWhereInput)
    where?: DefinedAcademyCareerStageWhereInput;

    @Field(() => [DefinedAcademyCareerStageOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DefinedAcademyCareerStageOrderByWithRelationInput>;

    @Field(() => DefinedAcademyCareerStageWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<DefinedAcademyCareerStageWhereUniqueInput, 'id' | 'journeyId_slug'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => DefinedAcademyCareerStageCountAggregateInput, {nullable:true})
    _count?: DefinedAcademyCareerStageCountAggregateInput;

    @Field(() => DefinedAcademyCareerStageAvgAggregateInput, {nullable:true})
    _avg?: DefinedAcademyCareerStageAvgAggregateInput;

    @Field(() => DefinedAcademyCareerStageSumAggregateInput, {nullable:true})
    _sum?: DefinedAcademyCareerStageSumAggregateInput;

    @Field(() => DefinedAcademyCareerStageMinAggregateInput, {nullable:true})
    _min?: DefinedAcademyCareerStageMinAggregateInput;

    @Field(() => DefinedAcademyCareerStageMaxAggregateInput, {nullable:true})
    _max?: DefinedAcademyCareerStageMaxAggregateInput;
}
