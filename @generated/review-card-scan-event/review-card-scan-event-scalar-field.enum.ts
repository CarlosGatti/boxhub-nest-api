import { registerEnumType } from '@nestjs/graphql';

export enum ReviewCardScanEventScalarFieldEnum {
    id = "id",
    projectId = "projectId",
    ipHash = "ipHash",
    userAgent = "userAgent",
    referer = "referer",
    createdAt = "createdAt"
}


registerEnumType(ReviewCardScanEventScalarFieldEnum, { name: 'ReviewCardScanEventScalarFieldEnum', description: undefined })
