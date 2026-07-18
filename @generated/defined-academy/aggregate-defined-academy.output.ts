import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { DefinedAcademyCountAggregate } from './defined-academy-count-aggregate.output';
import { DefinedAcademyAvgAggregate } from './defined-academy-avg-aggregate.output';
import { DefinedAcademySumAggregate } from './defined-academy-sum-aggregate.output';
import { DefinedAcademyMinAggregate } from './defined-academy-min-aggregate.output';
import { DefinedAcademyMaxAggregate } from './defined-academy-max-aggregate.output';

@ObjectType()
export class AggregateDefinedAcademy {

    @Field(() => DefinedAcademyCountAggregate, {nullable:true})
    _count?: DefinedAcademyCountAggregate;

    @Field(() => DefinedAcademyAvgAggregate, {nullable:true})
    _avg?: DefinedAcademyAvgAggregate;

    @Field(() => DefinedAcademySumAggregate, {nullable:true})
    _sum?: DefinedAcademySumAggregate;

    @Field(() => DefinedAcademyMinAggregate, {nullable:true})
    _min?: DefinedAcademyMinAggregate;

    @Field(() => DefinedAcademyMaxAggregate, {nullable:true})
    _max?: DefinedAcademyMaxAggregate;
}
