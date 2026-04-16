import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedClientType } from '../prisma/defined-client-type.enum';
import { DefinedClientCountAggregate } from './defined-client-count-aggregate.output';
import { DefinedClientAvgAggregate } from './defined-client-avg-aggregate.output';
import { DefinedClientSumAggregate } from './defined-client-sum-aggregate.output';
import { DefinedClientMinAggregate } from './defined-client-min-aggregate.output';
import { DefinedClientMaxAggregate } from './defined-client-max-aggregate.output';

@ObjectType()
export class DefinedClientGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => DefinedClientType, {nullable:false})
    type!: keyof typeof DefinedClientType;

    @Field(() => String, {nullable:true})
    companyName?: string;

    @Field(() => String, {nullable:true})
    legalName?: string;

    @Field(() => String, {nullable:false})
    contactName!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:true})
    phone?: string;

    @Field(() => String, {nullable:true})
    website?: string;

    @Field(() => String, {nullable:true})
    instagram?: string;

    @Field(() => String, {nullable:true})
    facebook?: string;

    @Field(() => String, {nullable:true})
    addressLine1?: string;

    @Field(() => String, {nullable:true})
    addressLine2?: string;

    @Field(() => String, {nullable:true})
    city?: string;

    @Field(() => String, {nullable:true})
    state?: string;

    @Field(() => String, {nullable:true})
    postalCode?: string;

    @Field(() => String, {nullable:true})
    country?: string;

    @Field(() => String, {nullable:true})
    businessType?: string;

    @Field(() => String, {nullable:true})
    serviceArea?: string;

    @Field(() => Int, {nullable:true})
    yearsInBusiness?: number;

    @Field(() => String, {nullable:true})
    notes?: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => DefinedClientCountAggregate, {nullable:true})
    _count?: DefinedClientCountAggregate;

    @Field(() => DefinedClientAvgAggregate, {nullable:true})
    _avg?: DefinedClientAvgAggregate;

    @Field(() => DefinedClientSumAggregate, {nullable:true})
    _sum?: DefinedClientSumAggregate;

    @Field(() => DefinedClientMinAggregate, {nullable:true})
    _min?: DefinedClientMinAggregate;

    @Field(() => DefinedClientMaxAggregate, {nullable:true})
    _max?: DefinedClientMaxAggregate;
}
