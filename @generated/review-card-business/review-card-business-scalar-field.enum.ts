import { registerEnumType } from '@nestjs/graphql';

export enum ReviewCardBusinessScalarFieldEnum {
    id = "id",
    userId = "userId",
    name = "name",
    placeId = "placeId",
    googleReviewUrl = "googleReviewUrl",
    website = "website",
    phone = "phone",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(ReviewCardBusinessScalarFieldEnum, { name: 'ReviewCardBusinessScalarFieldEnum', description: undefined })
