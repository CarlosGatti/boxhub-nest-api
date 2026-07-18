import { registerEnumType } from '@nestjs/graphql';

export enum DefinedAcademyReferralStatus {
    VISITED = "VISITED",
    REGISTERED = "REGISTERED",
    ENROLLED = "ENROLLED",
    INVALID = "INVALID",
    EXPIRED = "EXPIRED"
}


registerEnumType(DefinedAcademyReferralStatus, { name: 'DefinedAcademyReferralStatus', description: undefined })
