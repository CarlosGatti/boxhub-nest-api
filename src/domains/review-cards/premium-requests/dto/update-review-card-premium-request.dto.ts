import { IsEnum } from 'class-validator';
import { ReviewCardPremiumRequestStatus } from '@prisma/client';

export class UpdateReviewCardPremiumRequestDto {
  @IsEnum(ReviewCardPremiumRequestStatus)
  status: ReviewCardPremiumRequestStatus;
}
