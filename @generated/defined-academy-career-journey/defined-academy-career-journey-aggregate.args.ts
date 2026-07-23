import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyCareerJourneyWhereInput } from './defined-academy-career-journey-where.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCareerJourneyOrderByWithRelationInput } from './defined-academy-career-journey-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyCareerJourneyWhereUniqueInput } from './defined-academy-career-journey-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyCareerJourneyCountAggregateInput } from './defined-academy-career-journey-count-aggregate.input';
import { DefinedAcademyCareerJourneyAvgAggregateInput } from './defined-academy-career-journey-avg-aggregate.input';
import { DefinedAcademyCareerJourneySumAggregateInput } from './defined-academy-career-journey-sum-aggregate.input';
import { DefinedAcademyCareerJourneyMinAggregateInput } from './defined-academy-career-journey-min-aggregate.input';
import { DefinedAcademyCareerJourneyMaxAggregateInput } from './defined-academy-career-journey-max-aggregate.input';

@ArgsType()
export class DefinedAcademyCareerJourneyAggregateArgs {

    @Field(() => DefinedAcademyCareerJourneyWhereInput, {nullable:true})
    @Type(() => DefinedAcademyCareerJourneyWhereInput)
    where?: DefinedAcademyCareerJourneyWhereInput;

    @Field(() => [DefinedAcademyCareerJourneyOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DefinedAcademyCareerJourneyOrderByWithRelationInput>;

    @Field(() => DefinedAcademyCareerJourneyWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<DefinedAcademyCareerJourneyWhereUniqueInput, 'id' | 'academyId' | 'academyId_slug'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => DefinedAcademyCareerJourneyCountAggregateInput, {nullable:true})
    _count?: DefinedAcademyCareerJourneyCountAggregateInput;

    @Field(() => DefinedAcademyCareerJourneyAvgAggregateInput, {nullable:true})
    _avg?: DefinedAcademyCareerJourneyAvgAggregateInput;

    @Field(() => DefinedAcademyCareerJourneySumAggregateInput, {nullable:true})
    _sum?: DefinedAcademyCareerJourneySumAggregateInput;

    @Field(() => DefinedAcademyCareerJourneyMinAggregateInput, {nullable:true})
    _min?: DefinedAcademyCareerJourneyMinAggregateInput;

    @Field(() => DefinedAcademyCareerJourneyMaxAggregateInput, {nullable:true})
    _max?: DefinedAcademyCareerJourneyMaxAggregateInput;
}
