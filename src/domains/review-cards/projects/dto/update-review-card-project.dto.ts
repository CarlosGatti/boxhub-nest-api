import { IsEnum, IsOptional, IsString, IsUrl } from 'class-validator';
import { ReviewCardLinkMode, ReviewCardProjectStatus } from '@prisma/client';

export class UpdateReviewCardProjectDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsEnum(ReviewCardProjectStatus)
  status?: ReviewCardProjectStatus;

  @IsOptional()
  @IsEnum(ReviewCardLinkMode)
  reviewLinkMode?: ReviewCardLinkMode;

  @IsOptional()
  @IsUrl()
  googleReviewUrlFinal?: string;

  @IsOptional()
  designJson?: Record<string, unknown>;

  @IsOptional()
  assetsJson?: Record<string, unknown>;
}
