import { registerEnumType } from '@nestjs/graphql';

export enum RatingScalarFieldEnum {
    id = "id",
    sellerId = "sellerId",
    buyerId = "buyerId",
    stars = "stars",
    comment = "comment",
    createdAt = "createdAt"
}


registerEnumType(RatingScalarFieldEnum, { name: 'RatingScalarFieldEnum', description: undefined })
