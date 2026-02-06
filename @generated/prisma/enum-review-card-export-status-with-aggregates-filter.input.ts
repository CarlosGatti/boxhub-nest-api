import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCardExportStatus } from './review-card-export-status.enum';
import { NestedEnumReviewCardExportStatusWithAggregatesFilter } from './nested-enum-review-card-export-status-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumReviewCardExportStatusFilter } from './nested-enum-review-card-export-status-filter.input';

@InputType()
export class EnumReviewCardExportStatusWithAggregatesFilter {

    @Field(() => ReviewCardExportStatus, {nullable:true})
    equals?: keyof typeof ReviewCardExportStatus;

    @Field(() => [ReviewCardExportStatus], {nullable:true})
    in?: Array<keyof typeof ReviewCardExportStatus>;

    @Field(() => [ReviewCardExportStatus], {nullable:true})
    notIn?: Array<keyof typeof ReviewCardExportStatus>;

    @Field(() => NestedEnumReviewCardExportStatusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumReviewCardExportStatusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumReviewCardExportStatusFilter, {nullable:true})
    _min?: NestedEnumReviewCardExportStatusFilter;

    @Field(() => NestedEnumReviewCardExportStatusFilter, {nullable:true})
    _max?: NestedEnumReviewCardExportStatusFilter;
}
