import { IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreatePortfolioDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  name: string;

  @IsString()
  @IsOptional()
  @MaxLength(3)
  baseCurrency?: string;
}
