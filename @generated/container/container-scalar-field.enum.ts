import { registerEnumType } from '@nestjs/graphql';

export enum ContainerScalarFieldEnum {
    id = "id",
    name = "name",
    description = "description",
    qrCode = "qrCode",
    code = "code",
    storageId = "storageId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(ContainerScalarFieldEnum, { name: 'ContainerScalarFieldEnum', description: undefined })
