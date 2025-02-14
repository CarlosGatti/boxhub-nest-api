import { registerEnumType } from '@nestjs/graphql';

export enum FacetValueScalarFieldEnum {
    id = "id",
    value = "value",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    facetId = "facetId"
}


registerEnumType(FacetValueScalarFieldEnum, { name: 'FacetValueScalarFieldEnum', description: undefined })
