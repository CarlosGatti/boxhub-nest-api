import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { EnumDefinedBrandingSectionTypeWithAggregatesFilter } from '../prisma/enum-defined-branding-section-type-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { JsonNullableWithAggregatesFilter } from '../prisma/json-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class DefinedBrandingSectionScalarWhereWithAggregatesInput {

    @Field(() => [DefinedBrandingSectionScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<DefinedBrandingSectionScalarWhereWithAggregatesInput>;

    @Field(() => [DefinedBrandingSectionScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<DefinedBrandingSectionScalarWhereWithAggregatesInput>;

    @Field(() => [DefinedBrandingSectionScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<DefinedBrandingSectionScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    brandingProjectId?: IntWithAggregatesFilter;

    @Field(() => EnumDefinedBrandingSectionTypeWithAggregatesFilter, {nullable:true})
    type?: EnumDefinedBrandingSectionTypeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    title?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    body?: StringNullableWithAggregatesFilter;

    @Field(() => JsonNullableWithAggregatesFilter, {nullable:true})
    contentJson?: JsonNullableWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    order?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
