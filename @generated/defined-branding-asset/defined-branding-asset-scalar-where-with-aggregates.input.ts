import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { EnumDefinedBrandingAssetTypeWithAggregatesFilter } from '../prisma/enum-defined-branding-asset-type-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { JsonNullableWithAggregatesFilter } from '../prisma/json-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class DefinedBrandingAssetScalarWhereWithAggregatesInput {

    @Field(() => [DefinedBrandingAssetScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<DefinedBrandingAssetScalarWhereWithAggregatesInput>;

    @Field(() => [DefinedBrandingAssetScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<DefinedBrandingAssetScalarWhereWithAggregatesInput>;

    @Field(() => [DefinedBrandingAssetScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<DefinedBrandingAssetScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    brandingProjectId?: IntWithAggregatesFilter;

    @Field(() => EnumDefinedBrandingAssetTypeWithAggregatesFilter, {nullable:true})
    type?: EnumDefinedBrandingAssetTypeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    fileUrl?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    fileName?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    mimeType?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    notes?: StringNullableWithAggregatesFilter;

    @Field(() => JsonNullableWithAggregatesFilter, {nullable:true})
    metadata?: JsonNullableWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    order?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
