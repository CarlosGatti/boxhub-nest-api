import { registerEnumType } from '@nestjs/graphql';

export enum StorageScalarFieldEnum {
    id = "id",
    name = "name",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(StorageScalarFieldEnum, { name: 'StorageScalarFieldEnum', description: undefined })
