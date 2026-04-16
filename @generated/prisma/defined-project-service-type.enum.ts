import { registerEnumType } from '@nestjs/graphql';

export enum DefinedProjectServiceType {
    BRANDING = "BRANDING",
    WEBSITE = "WEBSITE",
    VIDEO = "VIDEO",
    ADS = "ADS",
    SOCIAL = "SOCIAL",
    OTHER = "OTHER"
}


registerEnumType(DefinedProjectServiceType, { name: 'DefinedProjectServiceType', description: undefined })
