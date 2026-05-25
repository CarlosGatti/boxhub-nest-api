import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { EnumDefinedBrandingAssetTypeFilter } from '../prisma/enum-defined-branding-asset-type-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class DefinedBrandingAssetScalarWhereInput {

    @Field(() => [DefinedBrandingAssetScalarWhereInput], {nullable:true})
    AND?: Array<DefinedBrandingAssetScalarWhereInput>;

    @Field(() => [DefinedBrandingAssetScalarWhereInput], {nullable:true})
    OR?: Array<DefinedBrandingAssetScalarWhereInput>;

    @Field(() => [DefinedBrandingAssetScalarWhereInput], {nullable:true})
    NOT?: Array<DefinedBrandingAssetScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    brandingProjectId?: IntFilter;

    @Field(() => EnumDefinedBrandingAssetTypeFilter, {nullable:true})
    type?: EnumDefinedBrandingAssetTypeFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    fileUrl?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    fileName?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    mimeType?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    notes?: StringNullableFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    metadata?: JsonNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    order?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
