import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class DefinedClientMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    type?: true;

    @Field(() => Boolean, {nullable:true})
    companyName?: true;

    @Field(() => Boolean, {nullable:true})
    legalName?: true;

    @Field(() => Boolean, {nullable:true})
    contactName?: true;

    @Field(() => Boolean, {nullable:true})
    email?: true;

    @Field(() => Boolean, {nullable:true})
    phone?: true;

    @Field(() => Boolean, {nullable:true})
    website?: true;

    @Field(() => Boolean, {nullable:true})
    instagram?: true;

    @Field(() => Boolean, {nullable:true})
    facebook?: true;

    @Field(() => Boolean, {nullable:true})
    addressLine1?: true;

    @Field(() => Boolean, {nullable:true})
    addressLine2?: true;

    @Field(() => Boolean, {nullable:true})
    city?: true;

    @Field(() => Boolean, {nullable:true})
    state?: true;

    @Field(() => Boolean, {nullable:true})
    postalCode?: true;

    @Field(() => Boolean, {nullable:true})
    country?: true;

    @Field(() => Boolean, {nullable:true})
    businessType?: true;

    @Field(() => Boolean, {nullable:true})
    serviceArea?: true;

    @Field(() => Boolean, {nullable:true})
    yearsInBusiness?: true;

    @Field(() => Boolean, {nullable:true})
    notes?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}
