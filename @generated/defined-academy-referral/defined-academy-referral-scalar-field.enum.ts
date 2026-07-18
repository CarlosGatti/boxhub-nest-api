import { registerEnumType } from '@nestjs/graphql';

export enum DefinedAcademyReferralScalarFieldEnum {
    id = "id",
    academyId = "academyId",
    campaignId = "campaignId",
    referrerUserId = "referrerUserId",
    partnerId = "partnerId",
    referredUserId = "referredUserId",
    referralCode = "referralCode",
    status = "status",
    firstVisitedAt = "firstVisitedAt",
    registeredAt = "registeredAt",
    enrolledAt = "enrolledAt",
    attributionExpiresAt = "attributionExpiresAt",
    metadata = "metadata",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(DefinedAcademyReferralScalarFieldEnum, { name: 'DefinedAcademyReferralScalarFieldEnum', description: undefined })
