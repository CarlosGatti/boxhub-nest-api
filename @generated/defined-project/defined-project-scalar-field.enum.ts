import { registerEnumType } from '@nestjs/graphql';

export enum DefinedProjectScalarFieldEnum {
    id = "id",
    clientId = "clientId",
    name = "name",
    serviceType = "serviceType",
    status = "status",
    budget = "budget",
    deadline = "deadline",
    source = "source",
    assignedTo = "assignedTo",
    supplierId = "supplierId",
    notes = "notes",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(DefinedProjectScalarFieldEnum, { name: 'DefinedProjectScalarFieldEnum', description: undefined })
