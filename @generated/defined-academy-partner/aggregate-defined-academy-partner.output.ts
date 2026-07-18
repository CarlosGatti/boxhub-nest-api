import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { DefinedAcademyPartnerCountAggregate } from './defined-academy-partner-count-aggregate.output';
import { DefinedAcademyPartnerAvgAggregate } from './defined-academy-partner-avg-aggregate.output';
import { DefinedAcademyPartnerSumAggregate } from './defined-academy-partner-sum-aggregate.output';
import { DefinedAcademyPartnerMinAggregate } from './defined-academy-partner-min-aggregate.output';
import { DefinedAcademyPartnerMaxAggregate } from './defined-academy-partner-max-aggregate.output';

@ObjectType()
export class AggregateDefinedAcademyPartner {

    @Field(() => DefinedAcademyPartnerCountAggregate, {nullable:true})
    _count?: DefinedAcademyPartnerCountAggregate;

    @Field(() => DefinedAcademyPartnerAvgAggregate, {nullable:true})
    _avg?: DefinedAcademyPartnerAvgAggregate;

    @Field(() => DefinedAcademyPartnerSumAggregate, {nullable:true})
    _sum?: DefinedAcademyPartnerSumAggregate;

    @Field(() => DefinedAcademyPartnerMinAggregate, {nullable:true})
    _min?: DefinedAcademyPartnerMinAggregate;

    @Field(() => DefinedAcademyPartnerMaxAggregate, {nullable:true})
    _max?: DefinedAcademyPartnerMaxAggregate;
}
