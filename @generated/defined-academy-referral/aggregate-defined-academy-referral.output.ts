import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { DefinedAcademyReferralCountAggregate } from './defined-academy-referral-count-aggregate.output';
import { DefinedAcademyReferralAvgAggregate } from './defined-academy-referral-avg-aggregate.output';
import { DefinedAcademyReferralSumAggregate } from './defined-academy-referral-sum-aggregate.output';
import { DefinedAcademyReferralMinAggregate } from './defined-academy-referral-min-aggregate.output';
import { DefinedAcademyReferralMaxAggregate } from './defined-academy-referral-max-aggregate.output';

@ObjectType()
export class AggregateDefinedAcademyReferral {

    @Field(() => DefinedAcademyReferralCountAggregate, {nullable:true})
    _count?: DefinedAcademyReferralCountAggregate;

    @Field(() => DefinedAcademyReferralAvgAggregate, {nullable:true})
    _avg?: DefinedAcademyReferralAvgAggregate;

    @Field(() => DefinedAcademyReferralSumAggregate, {nullable:true})
    _sum?: DefinedAcademyReferralSumAggregate;

    @Field(() => DefinedAcademyReferralMinAggregate, {nullable:true})
    _min?: DefinedAcademyReferralMinAggregate;

    @Field(() => DefinedAcademyReferralMaxAggregate, {nullable:true})
    _max?: DefinedAcademyReferralMaxAggregate;
}
