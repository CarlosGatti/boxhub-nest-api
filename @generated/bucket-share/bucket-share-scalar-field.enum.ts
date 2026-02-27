import { registerEnumType } from '@nestjs/graphql';

export enum BucketShareScalarFieldEnum {
    id = "id",
    userId = "userId",
    token = "token",
    type = "type",
    title = "title",
    payload = "payload",
    createdAt = "createdAt"
}


registerEnumType(BucketShareScalarFieldEnum, { name: 'BucketShareScalarFieldEnum', description: undefined })
