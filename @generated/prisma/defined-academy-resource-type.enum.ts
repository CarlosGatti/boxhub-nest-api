import { registerEnumType } from '@nestjs/graphql';

export enum DefinedAcademyResourceType {
    PDF = "PDF",
    IMAGE = "IMAGE",
    FILE = "FILE",
    TEXT = "TEXT",
    GUIDE = "GUIDE",
    TEMPLATE = "TEMPLATE",
    CHECKLIST = "CHECKLIST",
    EXTERNAL_LINK = "EXTERNAL_LINK",
    EMBED = "EMBED"
}


registerEnumType(DefinedAcademyResourceType, { name: 'DefinedAcademyResourceType', description: undefined })
