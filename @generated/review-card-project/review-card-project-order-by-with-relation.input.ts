import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { Type } from 'class-transformer';
import { ReviewCardBusinessOrderByWithRelationInput } from '../review-card-business/review-card-business-order-by-with-relation.input';
import { ReviewCardTemplateOrderByWithRelationInput } from '../review-card-template/review-card-template-order-by-with-relation.input';
import { ReviewCardExportOrderByRelationAggregateInput } from '../review-card-export/review-card-export-order-by-relation-aggregate.input';
import { ReviewCardScanEventOrderByRelationAggregateInput } from '../review-card-scan-event/review-card-scan-event-order-by-relation-aggregate.input';
import { ReviewCardPremiumRequestOrderByRelationAggregateInput } from '../review-card-premium-request/review-card-premium-request-order-by-relation-aggregate.input';

@InputType()
export class ReviewCardProjectOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    businessId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    templateId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    slug?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    reviewLinkMode?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    googleReviewUrlFinal?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    designJson?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    assetsJson?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    @Type(() => UserOrderByWithRelationInput)
    user?: UserOrderByWithRelationInput;

    @Field(() => ReviewCardBusinessOrderByWithRelationInput, {nullable:true})
    business?: ReviewCardBusinessOrderByWithRelationInput;

    @Field(() => ReviewCardTemplateOrderByWithRelationInput, {nullable:true})
    template?: ReviewCardTemplateOrderByWithRelationInput;

    @Field(() => ReviewCardExportOrderByRelationAggregateInput, {nullable:true})
    exports?: ReviewCardExportOrderByRelationAggregateInput;

    @Field(() => ReviewCardScanEventOrderByRelationAggregateInput, {nullable:true})
    scans?: ReviewCardScanEventOrderByRelationAggregateInput;

    @Field(() => ReviewCardPremiumRequestOrderByRelationAggregateInput, {nullable:true})
    premiumRequests?: ReviewCardPremiumRequestOrderByRelationAggregateInput;
}
