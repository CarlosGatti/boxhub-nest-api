import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { EnumReviewCardExportTypeFilter } from '../prisma/enum-review-card-export-type-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumReviewCardExportStatusFilter } from '../prisma/enum-review-card-export-status-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ReviewCardProjectRelationFilter } from '../review-card-project/review-card-project-relation-filter.input';

@InputType()
export class ReviewCardExportWhereInput {

    @Field(() => [ReviewCardExportWhereInput], {nullable:true})
    AND?: Array<ReviewCardExportWhereInput>;

    @Field(() => [ReviewCardExportWhereInput], {nullable:true})
    OR?: Array<ReviewCardExportWhereInput>;

    @Field(() => [ReviewCardExportWhereInput], {nullable:true})
    NOT?: Array<ReviewCardExportWhereInput>;

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

    @Field(() => ReviewCardProjectRelationFilter, {nullable:true})
    project?: ReviewCardProjectRelationFilter;
}
