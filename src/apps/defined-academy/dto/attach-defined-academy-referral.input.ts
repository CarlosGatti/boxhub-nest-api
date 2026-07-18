import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

@InputType()
export class AttachDefinedAcademyReferralInput {
  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  @MaxLength(64)
  referralCode: string;
}
