import { registerEnumType } from '@nestjs/graphql';

export enum BucketVisionBoardScalarFieldEnum {
    id = "id",
    userId = "userId",
    title = "title",
    periodType = "periodType",
    year = "year",
    periodKey = "periodKey",
    startDate = "startDate",
    endDate = "endDate",
    theme = "theme",
    layoutMode = "layoutMode",
    coverUrl = "coverUrl",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(BucketVisionBoardScalarFieldEnum, { name: 'BucketVisionBoardScalarFieldEnum', description: undefined })
