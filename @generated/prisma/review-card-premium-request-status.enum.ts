import { registerEnumType } from '@nestjs/graphql';

export enum ReviewCardPremiumRequestStatus {
    OPEN = "OPEN",
    IN_PROGRESS = "IN_PROGRESS",
    DELIVERED = "DELIVERED"
}


registerEnumType(ReviewCardPremiumRequestStatus, { name: 'ReviewCardPremiumRequestStatus', description: undefined })
