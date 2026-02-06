import { registerEnumType } from '@nestjs/graphql';

export enum ReviewCardExportStatus {
    QUEUED = "QUEUED",
    DONE = "DONE",
    FAILED = "FAILED"
}


registerEnumType(ReviewCardExportStatus, { name: 'ReviewCardExportStatus', description: undefined })
