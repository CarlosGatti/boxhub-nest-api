import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { DefinedAcademyModuleCountAggregate } from './defined-academy-module-count-aggregate.output';
import { DefinedAcademyModuleAvgAggregate } from './defined-academy-module-avg-aggregate.output';
import { DefinedAcademyModuleSumAggregate } from './defined-academy-module-sum-aggregate.output';
import { DefinedAcademyModuleMinAggregate } from './defined-academy-module-min-aggregate.output';
import { DefinedAcademyModuleMaxAggregate } from './defined-academy-module-max-aggregate.output';

@ObjectType()
export class AggregateDefinedAcademyModule {

    @Field(() => DefinedAcademyModuleCountAggregate, {nullable:true})
    _count?: DefinedAcademyModuleCountAggregate;

    @Field(() => DefinedAcademyModuleAvgAggregate, {nullable:true})
    _avg?: DefinedAcademyModuleAvgAggregate;

    @Field(() => DefinedAcademyModuleSumAggregate, {nullable:true})
    _sum?: DefinedAcademyModuleSumAggregate;

    @Field(() => DefinedAcademyModuleMinAggregate, {nullable:true})
    _min?: DefinedAcademyModuleMinAggregate;

    @Field(() => DefinedAcademyModuleMaxAggregate, {nullable:true})
    _max?: DefinedAcademyModuleMaxAggregate;
}
