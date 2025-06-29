import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { EnumPhotoCategoryWithAggregatesFilter } from '../prisma/enum-photo-category-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class ProjectPhotoScalarWhereWithAggregatesInput {

    @Field(() => [ProjectPhotoScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ProjectPhotoScalarWhereWithAggregatesInput>;

    @Field(() => [ProjectPhotoScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ProjectPhotoScalarWhereWithAggregatesInput>;

    @Field(() => [ProjectPhotoScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ProjectPhotoScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    projectId?: IntWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    caption?: StringNullableWithAggregatesFilter;

    @Field(() => EnumPhotoCategoryWithAggregatesFilter, {nullable:true})
    category?: EnumPhotoCategoryWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    stage?: StringNullableWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    imageUrl?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;
}
