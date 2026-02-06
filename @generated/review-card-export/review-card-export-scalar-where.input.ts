import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { EnumReviewCardExportTypeFilter } from '../prisma/enum-review-card-export-type-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumReviewCardExportStatusFilter } from '../prisma/enum-review-card-export-status-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class ReviewCardExportScalarWhereInput {

    @Field(() => [ReviewCardExportScalarWhereInput], {nullable:true})
    AND?: Array<ReviewCardExportScalarWhereInput>;

    @Field(() => [ReviewCardExportScalarWhereInput], {nullable:true})
    OR?: Array<ReviewCardExportScalarWhereInput>;

    @Field(() => [ReviewCardExportScalarWhereInput], {nullable:true})
    NOT?: Array<ReviewCardExportScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    projectId?: IntFilter;

    @Field(() => EnumReviewCardExportTypeFilter, {nullable:true})
    type?: EnumReviewCardExportTypeFilter;

    @Field(() => StringFilter, {nullable:true})
    format?: StringFilter;

    @Field(() => EnumReviewCardExportStatusFilter, {nullable:true})
    status?: EnumReviewCardExportStatusFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    fileUrl?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    errorMessage?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
