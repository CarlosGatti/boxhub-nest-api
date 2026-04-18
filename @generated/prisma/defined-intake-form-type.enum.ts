import { registerEnumType } from '@nestjs/graphql';

export enum DefinedIntakeFormType {
    BUSINESS_INTAKE = "BUSINESS_INTAKE",
    BRANDING_BRIEF = "BRANDING_BRIEF",
    WEBSITE_BRIEF = "WEBSITE_BRIEF",
    VIDEO_BRIEF = "VIDEO_BRIEF",
    ADS_BRIEF = "ADS_BRIEF"
}


registerEnumType(DefinedIntakeFormType, { name: 'DefinedIntakeFormType', description: undefined })
