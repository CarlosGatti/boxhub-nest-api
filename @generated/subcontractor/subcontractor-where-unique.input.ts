import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { SubcontractorWhereInput } from './subcontractor-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { InsuranceListRelationFilter } from '../insurance/insurance-list-relation-filter.input';

@InputType()
export class SubcontractorWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [SubcontractorWhereInput], {nullable:true})
    AND?: Array<SubcontractorWhereInput>;

    @Field(() => [SubcontractorWhereInput], {nullable:true})
    OR?: Array<SubcontractorWhereInput>;

    @Field(() => [SubcontractorWhereInput], {nullable:true})
    NOT?: Array<SubcontractorWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    companyName?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    contactName?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    email?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    phone?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    trade?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    bankAccount?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    paymentPreference?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    notes?: StringNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    priority?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    createdViaPublicForm?: BoolFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => InsuranceListRelationFilter, {nullable:true})
    insurances?: InsuranceListRelationFilter;
}
