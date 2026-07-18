import { registerEnumType } from '@nestjs/graphql';

export enum DefinedAcademyReferralSourceType {
    SCHOOL = "SCHOOL",
    PARTNER = "PARTNER",
    PROFESSIONAL = "PROFESSIONAL",
    LINKEDIN = "LINKEDIN",
    EMAIL = "EMAIL",
    EVENT = "EVENT",
    SOCIAL = "SOCIAL",
    ORGANIC = "ORGANIC",
    OTHER = "OTHER"
}


registerEnumType(DefinedAcademyReferralSourceType, { name: 'DefinedAcademyReferralSourceType', description: undefined })
