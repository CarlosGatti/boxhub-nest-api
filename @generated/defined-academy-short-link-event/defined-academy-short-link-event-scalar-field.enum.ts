import { registerEnumType } from '@nestjs/graphql';

export enum DefinedAcademyShortLinkEventScalarFieldEnum {
    id = "id",
    shortLinkId = "shortLinkId",
    occurredAt = "occurredAt",
    userId = "userId",
    anonymousSessionHash = "anonymousSessionHash",
    referrer = "referrer",
    userAgentSummary = "userAgentSummary",
    campaignMetadata = "campaignMetadata"
}


registerEnumType(DefinedAcademyShortLinkEventScalarFieldEnum, { name: 'DefinedAcademyShortLinkEventScalarFieldEnum', description: undefined })
