import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { ReviewCardExportType } from '@prisma/client';

export class CreateReviewCardExportDto {
  @IsEnum(ReviewCardExportType)
  type: ReviewCardExportType;

  @IsString()
  @IsNotEmpty()
  format: string;
}
