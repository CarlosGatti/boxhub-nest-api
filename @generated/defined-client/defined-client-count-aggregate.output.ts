import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class DefinedClientCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    type!: number;

    @Field(() => Int, {nullable:false})
    companyName!: number;

    @Field(() => Int, {nullable:false})
    legalName!: number;

    @Field(() => Int, {nullable:false})
    contactName!: number;

    @Field(() => Int, {nullable:false})
    email!: number;

    @Field(() => Int, {nullable:false})
    phone!: number;

    @Field(() => Int, {nullable:false})
    website!: number;

    @Field(() => Int, {nullable:false})
    instagram!: number;

    @Field(() => Int, {nullable:false})
    facebook!: number;

    @Field(() => Int, {nullable:false})
    addressLine1!: number;

    @Field(() => Int, {nullable:false})
    addressLine2!: number;

    @Field(() => Int, {nullable:false})
    city!: number;

    @Field(() => Int, {nullable:false})
    state!: number;

    @Field(() => Int, {nullable:false})
    postalCode!: number;

    @Field(() => Int, {nullable:false})
    country!: number;

    @Field(() => Int, {nullable:false})
    businessType!: number;

    @Field(() => Int, {nullable:false})
    serviceArea!: number;

    @Field(() => Int, {nullable:false})
    yearsInBusiness!: number;

    @Field(() => Int, {nullable:false})
    notes!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
