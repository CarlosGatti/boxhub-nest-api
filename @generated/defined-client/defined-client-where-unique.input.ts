import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedClientWhereInput } from './defined-client-where.input';
import { EnumDefinedClientTypeFilter } from '../prisma/enum-defined-client-type-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DefinedProjectListRelationFilter } from '../defined-project/defined-project-list-relation-filter.input';
import { DefinedInternalNoteListRelationFilter } from '../defined-internal-note/defined-internal-note-list-relation-filter.input';

@InputType()
export class DefinedClientWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [DefinedClientWhereInput], {nullable:true})
    AND?: Array<DefinedClientWhereInput>;

    @Field(() => [DefinedClientWhereInput], {nullable:true})
    OR?: Array<DefinedClientWhereInput>;

    @Field(() => [DefinedClientWhereInput], {nullable:true})
    NOT?: Array<DefinedClientWhereInput>;

    @Field(() => EnumDefinedClientTypeFilter, {nullable:true})
    type?: EnumDefinedClientTypeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    companyName?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    legalName?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    contactName?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    email?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    phone?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    website?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    instagram?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    facebook?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    addressLine1?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    addressLine2?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    city?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    state?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    postalCode?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    country?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    businessType?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    serviceArea?: StringNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    yearsInBusiness?: IntNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    notes?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => DefinedProjectListRelationFilter, {nullable:true})
    projects?: DefinedProjectListRelationFilter;

    @Field(() => DefinedInternalNoteListRelationFilter, {nullable:true})
    internalNotes?: DefinedInternalNoteListRelationFilter;
}
