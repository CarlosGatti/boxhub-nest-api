import { registerEnumType } from '@nestjs/graphql';

export enum DefinedAcademyShortLinkStatus {
    ACTIVE = "ACTIVE",
    DISABLED = "DISABLED",
    EXPIRED = "EXPIRED"
}


registerEnumType(DefinedAcademyShortLinkStatus, { name: 'DefinedAcademyShortLinkStatus', description: undefined })
