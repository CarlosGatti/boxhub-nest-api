import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { DefinedProjectOrderByRelationAggregateInput } from '../defined-project/defined-project-order-by-relation-aggregate.input';
import { Type } from 'class-transformer';
import { DefinedInvoiceOrderByRelationAggregateInput } from '../defined-invoice/defined-invoice-order-by-relation-aggregate.input';
import { DefinedInternalNoteOrderByRelationAggregateInput } from '../defined-internal-note/defined-internal-note-order-by-relation-aggregate.input';
import { DefinedIntakeFormOrderByRelationAggregateInput } from '../defined-intake-form/defined-intake-form-order-by-relation-aggregate.input';

@InputType()
export class DefinedClientOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    companyName?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    legalName?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    contactName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    phone?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    website?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    instagram?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    facebook?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    addressLine1?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    addressLine2?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    city?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    state?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    postalCode?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    country?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    businessType?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    serviceArea?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    yearsInBusiness?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    notes?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => DefinedProjectOrderByRelationAggregateInput, {nullable:true})
    @Type(() => DefinedProjectOrderByRelationAggregateInput)
    projects?: DefinedProjectOrderByRelationAggregateInput;

    @Field(() => DefinedInvoiceOrderByRelationAggregateInput, {nullable:true})
    @Type(() => DefinedInvoiceOrderByRelationAggregateInput)
    invoices?: DefinedInvoiceOrderByRelationAggregateInput;

    @Field(() => DefinedInternalNoteOrderByRelationAggregateInput, {nullable:true})
    internalNotes?: DefinedInternalNoteOrderByRelationAggregateInput;

    @Field(() => DefinedIntakeFormOrderByRelationAggregateInput, {nullable:true})
    intakeForms?: DefinedIntakeFormOrderByRelationAggregateInput;
}
