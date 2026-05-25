import { registerEnumType } from '@nestjs/graphql';

export enum DefinedBrandingSectionType {
    OVERVIEW = "OVERVIEW",
    CONCEPT = "CONCEPT",
    LOGO = "LOGO",
    COLORS = "COLORS",
    TYPOGRAPHY = "TYPOGRAPHY",
    VISUAL_IDENTITY = "VISUAL_IDENTITY",
    APPLICATIONS = "APPLICATIONS",
    MOCKUPS = "MOCKUPS",
    DELIVERABLES = "DELIVERABLES",
    NOTES = "NOTES",
    CUSTOM = "CUSTOM"
}


registerEnumType(DefinedBrandingSectionType, { name: 'DefinedBrandingSectionType', description: undefined })
