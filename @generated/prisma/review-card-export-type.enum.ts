import { registerEnumType } from '@nestjs/graphql';

export enum ReviewCardExportType {
    PNG = "PNG",
    PDF = "PDF"
}


registerEnumType(ReviewCardExportType, { name: 'ReviewCardExportType', description: undefined })
