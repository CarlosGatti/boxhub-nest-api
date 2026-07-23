import { IsOptional, IsString } from 'class-validator';
import { Transform } from 'class-transformer';

export class ResendVerificationDto {
  @IsOptional()
  @IsString()
  @Transform(({ value }) => (typeof value === 'string' ? value : ''))
  email?: string;

  /** App code (e.g. ACADEMY) — selects frontend URL in verification email/redirect. */
  @IsOptional()
  @IsString()
  @Transform(({ value }) => (typeof value === 'string' ? value.trim().toUpperCase() : undefined))
  appCode?: string;
}
