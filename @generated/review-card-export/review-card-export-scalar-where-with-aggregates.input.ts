import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { EnumReviewCardExportTypeWithAggregatesFilter } from '../prisma/enum-review-card-export-type-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumReviewCardExportStatusWithAggregatesFilter } from '../prisma/enum-review-card-export-status-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class ReviewCardExportScalarWhereWithAggregatesInput {

    @Field(() => [ReviewCardExportScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ReviewCardExportScalarWhereWithAggregatesInput>;

    @Field(() => [ReviewCardExportScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ReviewCardExportScalarWhereWithAggregatesInput>;

    @Field(() => [ReviewCardExportScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ReviewCardExportScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    projectId?: IntWithAggregatesFilter;

    @Field(() => EnumReviewCardExportTypeWithAggregatesFilter, {nullable:true})
    type?: EnumReviewCardExportTypeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    format?: StringWithAggregatesFilter;

    @Field(() => EnumReviewCardExportStatusWithAggregatesFilter, {nullable:true})
    status?: EnumReviewCardExportStatusWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    fileUrl?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    errorMessage?: StringNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
