import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class DefinedClientCountOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    companyName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    legalName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    contactName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    phone?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    website?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    instagram?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    facebook?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    addressLine1?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    addressLine2?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    city?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    state?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    postalCode?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    country?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    businessType?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    serviceArea?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    yearsInBusiness?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    notes?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}
