import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { JsonWithAggregatesFilter } from '../prisma/json-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class ReviewCardTemplateScalarWhereWithAggregatesInput {

    @Field(() => [ReviewCardTemplateScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ReviewCardTemplateScalarWhereWithAggregatesInput>;

    @Field(() => [ReviewCardTemplateScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ReviewCardTemplateScalarWhereWithAggregatesInput>;

    @Field(() => [ReviewCardTemplateScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ReviewCardTemplateScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    key?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    category?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    aspect?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    schemaVersion?: IntWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    isActive?: BoolWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    previewImageUrl?: StringNullableWithAggregatesFilter;

    @Field(() => JsonWithAggregatesFilter, {nullable:true})
    defaultDesignJson?: JsonWithAggregatesFilter;

    @Field(() => JsonWithAggregatesFilter, {nullable:true})
    editableFieldsJson?: JsonWithAggregatesFilter;

    @Field(() => JsonWithAggregatesFilter, {nullable:true})
    constraintsJson?: JsonWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
