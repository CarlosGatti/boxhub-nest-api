import { Field, InputType } from '@nestjs/graphql';
import {
  Equals,
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
  MaxLength,
} from 'class-validator';

@InputType()
export class SubmitDefinedLeadInput {
  @Field()
  @IsString()
  @IsNotEmpty()
  @MaxLength(120)
  fullName: string;

  @Field()
  @IsEmail()
  @MaxLength(254)
  email: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  @MaxLength(40)
  @Matches(/^[\d\s\-+().exEXt]{7,40}$/u, {
    message: 'phone must be a valid-looking phone number',
  })
  phone?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  @MaxLength(200)
  companyName?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  @MaxLength(120)
  businessType?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  @MaxLength(100)
  city?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  @MaxLength(50)
  state?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  @MaxLength(120)
  selectedPackage?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  @MaxLength(200)
  serviceInterest?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  @MaxLength(5000)
  message?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  @MaxLength(200)
  landingSlug?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  @MaxLength(2000)
  referrer?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  @MaxLength(200)
  utmSource?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  @MaxLength(200)
  utmMedium?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  @MaxLength(200)
  utmCampaign?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  @MaxLength(200)
  utmContent?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  @MaxLength(200)
  utmTerm?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  @MaxLength(255)
  gclid?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  @MaxLength(255)
  fbclid?: string;

  /** Must be true — records marketing consent for this submission. */
  @Field()
  @IsBoolean()
  @Equals(true, { message: 'consent must be accepted to submit' })
  consent: boolean;

  /**
   * Honeypot: must be left empty. Hidden from users; bots often fill it.
   * If set, the API responds with a benign success and does not persist.
   */
  @Field(() => String, { nullable: true, description: 'Anti-spam: leave empty (hidden field).' })
  @IsOptional()
  @IsString()
  @MaxLength(200)
  honeypot?: string;
}
