import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { DefinedAcademyCareerJourneyCountAggregate } from './defined-academy-career-journey-count-aggregate.output';
import { DefinedAcademyCareerJourneyAvgAggregate } from './defined-academy-career-journey-avg-aggregate.output';
import { DefinedAcademyCareerJourneySumAggregate } from './defined-academy-career-journey-sum-aggregate.output';
import { DefinedAcademyCareerJourneyMinAggregate } from './defined-academy-career-journey-min-aggregate.output';
import { DefinedAcademyCareerJourneyMaxAggregate } from './defined-academy-career-journey-max-aggregate.output';

@ObjectType()
export class AggregateDefinedAcademyCareerJourney {

    @Field(() => DefinedAcademyCareerJourneyCountAggregate, {nullable:true})
    _count?: DefinedAcademyCareerJourneyCountAggregate;

    @Field(() => DefinedAcademyCareerJourneyAvgAggregate, {nullable:true})
    _avg?: DefinedAcademyCareerJourneyAvgAggregate;

    @Field(() => DefinedAcademyCareerJourneySumAggregate, {nullable:true})
    _sum?: DefinedAcademyCareerJourneySumAggregate;

    @Field(() => DefinedAcademyCareerJourneyMinAggregate, {nullable:true})
    _min?: DefinedAcademyCareerJourneyMinAggregate;

    @Field(() => DefinedAcademyCareerJourneyMaxAggregate, {nullable:true})
    _max?: DefinedAcademyCareerJourneyMaxAggregate;
}
