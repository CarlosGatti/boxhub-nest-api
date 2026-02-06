import { IsString, IsOptional, Matches, MinLength } from 'class-validator';

export class MintTokenDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsString()
  @Matches(/^[0-9]{6,20}$/, {
    message: 'discountId must be 6-20 digits',
  })
  discountId: string;
}
