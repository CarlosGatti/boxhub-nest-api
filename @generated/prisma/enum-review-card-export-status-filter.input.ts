import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCardExportStatus } from './review-card-export-status.enum';
import { NestedEnumReviewCardExportStatusFilter } from './nested-enum-review-card-export-status-filter.input';

@InputType()
export class EnumReviewCardExportStatusFilter {

    @Field(() => ReviewCardExportStatus, {nullable:true})
    equals?: keyof typeof ReviewCardExportStatus;

    @Field(() => [ReviewCardExportStatus], {nullable:true})
    in?: Array<keyof typeof ReviewCardExportStatus>;

    @Field(() => [ReviewCardExportStatus], {nullable:true})
    notIn?: Array<keyof typeof ReviewCardExportStatus>;

    @Field(() => NestedEnumReviewCardExportStatusFilter, {nullable:true})
    not?: NestedEnumReviewCardExportStatusFilter;
}
