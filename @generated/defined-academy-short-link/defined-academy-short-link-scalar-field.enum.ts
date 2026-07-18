import { registerEnumType } from '@nestjs/graphql';

export enum DefinedAcademyShortLinkScalarFieldEnum {
    id = "id",
    academyId = "academyId",
    code = "code",
    destinationUrl = "destinationUrl",
    resourceId = "resourceId",
    courseId = "courseId",
    partnerId = "partnerId",
    referralCampaignId = "referralCampaignId",
    status = "status",
    expiresAt = "expiresAt",
    visitCount = "visitCount",
    createdById = "createdById",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(DefinedAcademyShortLinkScalarFieldEnum, { name: 'DefinedAcademyShortLinkScalarFieldEnum', description: undefined })
