import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedIntakeFormType } from '../prisma/defined-intake-form-type.enum';
import { DefinedIntakeFormStatus } from '../prisma/defined-intake-form-status.enum';
import { DefinedIntakeFormCountAggregate } from './defined-intake-form-count-aggregate.output';
import { DefinedIntakeFormAvgAggregate } from './defined-intake-form-avg-aggregate.output';
import { DefinedIntakeFormSumAggregate } from './defined-intake-form-sum-aggregate.output';
import { DefinedIntakeFormMinAggregate } from './defined-intake-form-min-aggregate.output';
import { DefinedIntakeFormMaxAggregate } from './defined-intake-form-max-aggregate.output';

@ObjectType()
export class DefinedIntakeFormGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    clientId!: number;

    @Field(() => Int, {nullable:true})
    projectId?: number;

    @Field(() => DefinedIntakeFormType, {nullable:false})
    formType!: keyof typeof DefinedIntakeFormType;

    @Field(() => DefinedIntakeFormStatus, {nullable:false})
    status!: keyof typeof DefinedIntakeFormStatus;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => String, {nullable:true})
    shareToken?: string;

    @Field(() => Date, {nullable:true})
    shareTokenCreatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    shareTokenExpiresAt?: Date | string;

    @Field(() => Date, {nullable:true})
    shareRevokedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    submittedAt?: Date | string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

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
