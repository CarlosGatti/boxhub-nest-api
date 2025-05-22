import { registerEnumType } from '@nestjs/graphql';

export enum StorageMemberScalarFieldEnum {
    id = "id",
    userId = "userId",
    storageId = "storageId",
    role = "role",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(StorageMemberScalarFieldEnum, { name: 'StorageMemberScalarFieldEnum', description: undefined })
