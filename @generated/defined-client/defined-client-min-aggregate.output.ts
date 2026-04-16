import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedClientType } from '../prisma/defined-client-type.enum';

@ObjectType()
export class DefinedClientMinAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => DefinedClientType, {nullable:true})
    type?: keyof typeof DefinedClientType;

    @Field(() => String, {nullable:true})
    companyName?: string;

    @Field(() => String, {nullable:true})
    legalName?: string;

    @Field(() => String, {nullable:true})
    contactName?: string;

    @Field(() => String, {nullable:true})
    email?: string;

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

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
