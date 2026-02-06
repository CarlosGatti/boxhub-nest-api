import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCardExportType } from './review-card-export-type.enum';
import { NestedEnumReviewCardExportTypeFilter } from './nested-enum-review-card-export-type-filter.input';

@InputType()
export class EnumReviewCardExportTypeFilter {

    @Field(() => ReviewCardExportType, {nullable:true})
    equals?: keyof typeof ReviewCardExportType;

    @Field(() => [ReviewCardExportType], {nullable:true})
    in?: Array<keyof typeof ReviewCardExportType>;

    @Field(() => [ReviewCardExportType], {nullable:true})
    notIn?: Array<keyof typeof ReviewCardExportType>;

    @Field(() => NestedEnumReviewCardExportTypeFilter, {nullable:true})
    not?: NestedEnumReviewCardExportTypeFilter;
}
