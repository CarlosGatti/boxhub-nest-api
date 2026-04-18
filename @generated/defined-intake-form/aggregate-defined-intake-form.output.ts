import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { DefinedIntakeFormCountAggregate } from './defined-intake-form-count-aggregate.output';
import { DefinedIntakeFormAvgAggregate } from './defined-intake-form-avg-aggregate.output';
import { DefinedIntakeFormSumAggregate } from './defined-intake-form-sum-aggregate.output';
import { DefinedIntakeFormMinAggregate } from './defined-intake-form-min-aggregate.output';
import { DefinedIntakeFormMaxAggregate } from './defined-intake-form-max-aggregate.output';

@ObjectType()
export class AggregateDefinedIntakeForm {

    @Field(() => DefinedIntakeFormCountAggregate, {nullable:true})
    _count?: DefinedIntakeFormCountAggregate;

    @Field(() => DefinedIntakeFormAvgAggregate, {nullable:true})
    _avg?: DefinedIntakeFormAvgAggregate;

    @Field(() => DefinedIntakeFormSumAggregate, {nullable:true})
    _sum?: DefinedIntakeFormSumAggregate;

    @Field(() => DefinedIntakeFormMinAggregate, {nullable:true})
    _min?: DefinedIntakeFormMinAggregate;

    @Field(() => DefinedIntakeFormMaxAggregate, {nullable:true})
    _max?: DefinedIntakeFormMaxAggregate;
}
