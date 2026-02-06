import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumReviewCardProjectStatusFilter } from '../prisma/enum-review-card-project-status-filter.input';
import { EnumReviewCardLinkModeFilter } from '../prisma/enum-review-card-link-mode-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { Type } from 'class-transformer';
import { ReviewCardBusinessRelationFilter } from '../review-card-business/review-card-business-relation-filter.input';
import { ReviewCardTemplateRelationFilter } from '../review-card-template/review-card-template-relation-filter.input';
import { ReviewCardExportListRelationFilter } from '../review-card-export/review-card-export-list-relation-filter.input';
import { ReviewCardScanEventListRelationFilter } from '../review-card-scan-event/review-card-scan-event-list-relation-filter.input';
import { ReviewCardPremiumRequestListRelationFilter } from '../review-card-premium-request/review-card-premium-request-list-relation-filter.input';

@InputType()
export class ReviewCardProjectWhereInput {

    @Field(() => [ReviewCardProjectWhereInput], {nullable:true})
    AND?: Array<ReviewCardProjectWhereInput>;

    @Field(() => [ReviewCardProjectWhereInput], {nullable:true})
    OR?: Array<ReviewCardProjectWhereInput>;

    @Field(() => [ReviewCardProjectWhereInput], {nullable:true})
    NOT?: Array<ReviewCardProjectWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    businessId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    templateId?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    slug?: StringNullableFilter;

    @Field(() => EnumReviewCardProjectStatusFilter, {nullable:true})
    status?: EnumReviewCardProjectStatusFilter;

    @Field(() => EnumReviewCardLinkModeFilter, {nullable:true})
    reviewLinkMode?: EnumReviewCardLinkModeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    googleReviewUrlFinal?: StringNullableFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    designJson?: JsonNullableFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    assetsJson?: JsonNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    @Type(() => UserRelationFilter)
    user?: UserRelationFilter;

    @Field(() => ReviewCardBusinessRelationFilter, {nullable:true})
    business?: ReviewCardBusinessRelationFilter;

    @Field(() => ReviewCardTemplateRelationFilter, {nullable:true})
    template?: ReviewCardTemplateRelationFilter;

    @Field(() => ReviewCardExportListRelationFilter, {nullable:true})
    exports?: ReviewCardExportListRelationFilter;

    @Field(() => ReviewCardScanEventListRelationFilter, {nullable:true})
    scans?: ReviewCardScanEventListRelationFilter;

    @Field(() => ReviewCardPremiumRequestListRelationFilter, {nullable:true})
    premiumRequests?: ReviewCardPremiumRequestListRelationFilter;
}
