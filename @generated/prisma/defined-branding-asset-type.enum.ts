import { registerEnumType } from '@nestjs/graphql';

export enum DefinedBrandingAssetType {
    PDF_MANUAL = "PDF_MANUAL",
    LOGO = "LOGO",
    IMAGE = "IMAGE",
    MOCKUP = "MOCKUP",
    COLOR_PALETTE = "COLOR_PALETTE",
    TYPOGRAPHY = "TYPOGRAPHY",
    SOURCE_FILE = "SOURCE_FILE",
    EXPORT = "EXPORT",
    OTHER = "OTHER"
}


registerEnumType(DefinedBrandingAssetType, { name: 'DefinedBrandingAssetType', description: undefined })
