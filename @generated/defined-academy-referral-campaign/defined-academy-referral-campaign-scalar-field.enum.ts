import { registerEnumType } from '@nestjs/graphql';

export enum DefinedAcademyReferralCampaignScalarFieldEnum {
    id = "id",
    academyId = "academyId",
    name = "name",
    code = "code",
    description = "description",
    sourceType = "sourceType",
    partnerId = "partnerId",
    courseId = "courseId",
    resourceId = "resourceId",
    status = "status",
    startsAt = "startsAt",
    endsAt = "endsAt",
    metadata = "metadata",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(DefinedAcademyReferralCampaignScalarFieldEnum, { name: 'DefinedAcademyReferralCampaignScalarFieldEnum', description: undefined })
