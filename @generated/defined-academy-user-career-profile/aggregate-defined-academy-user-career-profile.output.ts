import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { DefinedAcademyUserCareerProfileCountAggregate } from './defined-academy-user-career-profile-count-aggregate.output';
import { DefinedAcademyUserCareerProfileAvgAggregate } from './defined-academy-user-career-profile-avg-aggregate.output';
import { DefinedAcademyUserCareerProfileSumAggregate } from './defined-academy-user-career-profile-sum-aggregate.output';
import { DefinedAcademyUserCareerProfileMinAggregate } from './defined-academy-user-career-profile-min-aggregate.output';
import { DefinedAcademyUserCareerProfileMaxAggregate } from './defined-academy-user-career-profile-max-aggregate.output';

@ObjectType()
export class AggregateDefinedAcademyUserCareerProfile {

    @Field(() => DefinedAcademyUserCareerProfileCountAggregate, {nullable:true})
    _count?: DefinedAcademyUserCareerProfileCountAggregate;

    @Field(() => DefinedAcademyUserCareerProfileAvgAggregate, {nullable:true})
    _avg?: DefinedAcademyUserCareerProfileAvgAggregate;

    @Field(() => DefinedAcademyUserCareerProfileSumAggregate, {nullable:true})
    _sum?: DefinedAcademyUserCareerProfileSumAggregate;

    @Field(() => DefinedAcademyUserCareerProfileMinAggregate, {nullable:true})
    _min?: DefinedAcademyUserCareerProfileMinAggregate;

    @Field(() => DefinedAcademyUserCareerProfileMaxAggregate, {nullable:true})
    _max?: DefinedAcademyUserCareerProfileMaxAggregate;
}
