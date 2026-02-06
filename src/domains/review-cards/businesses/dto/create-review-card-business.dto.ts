import { IsNotEmpty, IsOptional, IsString, IsUrl } from 'class-validator';

export class CreateReviewCardBusinessDto {
  @IsString()
  @IsNotEmpty()
  name: string;

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
