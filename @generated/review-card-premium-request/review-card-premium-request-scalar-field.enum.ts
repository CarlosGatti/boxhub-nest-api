import { registerEnumType } from '@nestjs/graphql';

export enum ReviewCardPremiumRequestScalarFieldEnum {
    id = "id",
    userId = "userId",
    projectId = "projectId",
    notes = "notes",
    status = "status",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(ReviewCardPremiumRequestScalarFieldEnum, { name: 'ReviewCardPremiumRequestScalarFieldEnum', description: undefined })
