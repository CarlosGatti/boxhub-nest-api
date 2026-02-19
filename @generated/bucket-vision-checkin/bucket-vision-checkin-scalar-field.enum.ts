import { registerEnumType } from '@nestjs/graphql';

export enum BucketVisionCheckinScalarFieldEnum {
    id = "id",
    boardId = "boardId",
    kind = "kind",
    notes = "notes",
    mood = "mood",
    snapshot = "snapshot",
    createdAt = "createdAt"
}


registerEnumType(BucketVisionCheckinScalarFieldEnum, { name: 'BucketVisionCheckinScalarFieldEnum', description: undefined })
