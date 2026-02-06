import { IsOptional, IsString, IsUrl } from 'class-validator';

export class UpdateReviewCardBusinessDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  placeId?: string;

  @IsOptional()
  @IsUrl()
  googleReviewUrl?: string;

  @IsOptional()
  @IsUrl()
  website?: string;

  @IsOptional()
  @IsString()
  phone?: string;
}
