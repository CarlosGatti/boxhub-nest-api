import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyPartnerStatus } from '../prisma/defined-academy-partner-status.enum';
import { DefinedAcademyPartnerCountAggregate } from './defined-academy-partner-count-aggregate.output';
import { DefinedAcademyPartnerAvgAggregate } from './defined-academy-partner-avg-aggregate.output';
import { DefinedAcademyPartnerSumAggregate } from './defined-academy-partner-sum-aggregate.output';
import { DefinedAcademyPartnerMinAggregate } from './defined-academy-partner-min-aggregate.output';
import { DefinedAcademyPartnerMaxAggregate } from './defined-academy-partner-max-aggregate.output';

@ObjectType()
export class DefinedAcademyPartnerGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    academyId!: number;

    @Field(() => Int, {nullable:true})
    categoryId?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => String, {nullable:true})
    websiteUrl?: string;

    @Field(() => String, {nullable:true})
    contactUrl?: string;

    @Field(() => String, {nullable:true})
    logoUrl?: string;

    @Field(() => String, {nullable:true})
    location?: string;

    @Field(() => DefinedAcademyPartnerStatus, {nullable:false})
    status!: keyof typeof DefinedAcademyPartnerStatus;

    @Field(() => Boolean, {nullable:false})
    featured!: boolean;

    @Field(() => Int, {nullable:false})
    sortOrder!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

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
