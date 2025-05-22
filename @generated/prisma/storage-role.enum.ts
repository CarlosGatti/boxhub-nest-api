import { registerEnumType } from '@nestjs/graphql';

export enum StorageRole {
    ADMIN = "ADMIN",
    MEMBER = "MEMBER"
}


registerEnumType(StorageRole, { name: 'StorageRole', description: undefined })
