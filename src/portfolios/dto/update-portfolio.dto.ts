import { IsOptional, IsString, MaxLength } from 'class-validator';

export class UpdatePortfolioDto {
  @IsString()
  @IsOptional()
  @MaxLength(255)
  name?: string;

  @IsString()
  @IsOptional()
  @MaxLength(3)
  baseCurrency?: string;
}
