import { registerEnumType } from '@nestjs/graphql';

export enum ReviewCardProjectScalarFieldEnum {
    id = "id",
    userId = "userId",
    businessId = "businessId",
    templateId = "templateId",
    name = "name",
    slug = "slug",
    status = "status",
    reviewLinkMode = "reviewLinkMode",
    googleReviewUrlFinal = "googleReviewUrlFinal",
    designJson = "designJson",
    assetsJson = "assetsJson",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(ReviewCardProjectScalarFieldEnum, { name: 'ReviewCardProjectScalarFieldEnum', description: undefined })
