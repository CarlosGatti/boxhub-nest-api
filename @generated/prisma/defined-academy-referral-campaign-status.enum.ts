import { registerEnumType } from '@nestjs/graphql';

export enum DefinedAcademyReferralCampaignStatus {
    DRAFT = "DRAFT",
    ACTIVE = "ACTIVE",
    ARCHIVED = "ARCHIVED"
}


registerEnumType(DefinedAcademyReferralCampaignStatus, { name: 'DefinedAcademyReferralCampaignStatus', description: undefined })
