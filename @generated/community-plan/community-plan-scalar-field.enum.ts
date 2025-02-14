import { registerEnumType } from '@nestjs/graphql';

export enum CommunityPlanScalarFieldEnum {
    id = "id",
    name = "name",
    description = "description",
    price = "price",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    communityId = "communityId"
}


registerEnumType(CommunityPlanScalarFieldEnum, { name: 'CommunityPlanScalarFieldEnum', description: undefined })
