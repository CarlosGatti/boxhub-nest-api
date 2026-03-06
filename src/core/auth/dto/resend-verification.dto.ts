import { IsOptional, IsString } from 'class-validator';
import { Transform } from 'class-transformer';

export class ResendVerificationDto {
  @IsOptional()
  @IsString()
  @Transform(({ value }) => (typeof value === 'string' ? value : ''))
  email?: string;
}
