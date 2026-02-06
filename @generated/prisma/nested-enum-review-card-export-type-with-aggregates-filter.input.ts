import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCardExportType } from './review-card-export-type.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumReviewCardExportTypeFilter } from './nested-enum-review-card-export-type-filter.input';

@InputType()
export class NestedEnumReviewCardExportTypeWithAggregatesFilter {

    @Field(() => ReviewCardExportType, {nullable:true})
    equals?: keyof typeof ReviewCardExportType;

    @Field(() => [ReviewCardExportType], {nullable:true})
    in?: Array<keyof typeof ReviewCardExportType>;

    @Field(() => [ReviewCardExportType], {nullable:true})
    notIn?: Array<keyof typeof ReviewCardExportType>;

    @Field(() => NestedEnumReviewCardExportTypeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumReviewCardExportTypeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumReviewCardExportTypeFilter, {nullable:true})
    _min?: NestedEnumReviewCardExportTypeFilter;

    @Field(() => NestedEnumReviewCardExportTypeFilter, {nullable:true})
    _max?: NestedEnumReviewCardExportTypeFilter;
}
