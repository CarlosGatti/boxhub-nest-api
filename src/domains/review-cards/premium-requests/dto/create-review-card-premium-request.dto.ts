import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateReviewCardPremiumRequestDto {
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  projectId?: number;

  @IsString()
  @IsNotEmpty()
  notes: string;
}
