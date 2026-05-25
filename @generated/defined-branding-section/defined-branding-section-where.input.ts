import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { EnumDefinedBrandingSectionTypeFilter } from '../prisma/enum-defined-branding-section-type-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DefinedBrandingProjectRelationFilter } from '../defined-branding-project/defined-branding-project-relation-filter.input';

@InputType()
export class DefinedBrandingSectionWhereInput {

    @Field(() => [DefinedBrandingSectionWhereInput], {nullable:true})
    AND?: Array<DefinedBrandingSectionWhereInput>;

    @Field(() => [DefinedBrandingSectionWhereInput], {nullable:true})
    OR?: Array<DefinedBrandingSectionWhereInput>;

    @Field(() => [DefinedBrandingSectionWhereInput], {nullable:true})
    NOT?: Array<DefinedBrandingSectionWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    brandingProjectId?: IntFilter;

    @Field(() => EnumDefinedBrandingSectionTypeFilter, {nullable:true})
    type?: EnumDefinedBrandingSectionTypeFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    body?: StringNullableFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    contentJson?: JsonNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    order?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => DefinedBrandingProjectRelationFilter, {nullable:true})
    brandingProject?: DefinedBrandingProjectRelationFilter;
}
