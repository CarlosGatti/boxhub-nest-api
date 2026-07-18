import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyContentStatus } from '../prisma/defined-academy-content-status.enum';
import { DefinedAcademyModuleCountAggregate } from './defined-academy-module-count-aggregate.output';
import { DefinedAcademyModuleAvgAggregate } from './defined-academy-module-avg-aggregate.output';
import { DefinedAcademyModuleSumAggregate } from './defined-academy-module-sum-aggregate.output';
import { DefinedAcademyModuleMinAggregate } from './defined-academy-module-min-aggregate.output';
import { DefinedAcademyModuleMaxAggregate } from './defined-academy-module-max-aggregate.output';

@ObjectType()
export class DefinedAcademyModuleGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    courseId!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Int, {nullable:false})
    sortOrder!: number;

    @Field(() => DefinedAcademyContentStatus, {nullable:false})
    status!: keyof typeof DefinedAcademyContentStatus;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

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
