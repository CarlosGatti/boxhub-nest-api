import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyCareerJourneyWhereInput } from './defined-academy-career-journey-where.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCareerJourneyOrderByWithAggregationInput } from './defined-academy-career-journey-order-by-with-aggregation.input';
import { DefinedAcademyCareerJourneyScalarFieldEnum } from './defined-academy-career-journey-scalar-field.enum';
import { DefinedAcademyCareerJourneyScalarWhereWithAggregatesInput } from './defined-academy-career-journey-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyCareerJourneyCountAggregateInput } from './defined-academy-career-journey-count-aggregate.input';
import { DefinedAcademyCareerJourneyAvgAggregateInput } from './defined-academy-career-journey-avg-aggregate.input';
import { DefinedAcademyCareerJourneySumAggregateInput } from './defined-academy-career-journey-sum-aggregate.input';
import { DefinedAcademyCareerJourneyMinAggregateInput } from './defined-academy-career-journey-min-aggregate.input';
import { DefinedAcademyCareerJourneyMaxAggregateInput } from './defined-academy-career-journey-max-aggregate.input';

@ArgsType()
export class DefinedAcademyCareerJourneyGroupByArgs {

    @Field(() => DefinedAcademyCareerJourneyWhereInput, {nullable:true})
    @Type(() => DefinedAcademyCareerJourneyWhereInput)
    where?: DefinedAcademyCareerJourneyWhereInput;

    @Field(() => [DefinedAcademyCareerJourneyOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<DefinedAcademyCareerJourneyOrderByWithAggregationInput>;

    @Field(() => [DefinedAcademyCareerJourneyScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof DefinedAcademyCareerJourneyScalarFieldEnum>;

    @Field(() => DefinedAcademyCareerJourneyScalarWhereWithAggregatesInput, {nullable:true})
    having?: DefinedAcademyCareerJourneyScalarWhereWithAggregatesInput;

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
