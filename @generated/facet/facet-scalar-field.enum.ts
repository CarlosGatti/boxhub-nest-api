import { registerEnumType } from '@nestjs/graphql';

export enum FacetScalarFieldEnum {
    id = "id",
    code = "code",
    name = "name",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    communityId = "communityId"
}


registerEnumType(FacetScalarFieldEnum, { name: 'FacetScalarFieldEnum', description: undefined })
