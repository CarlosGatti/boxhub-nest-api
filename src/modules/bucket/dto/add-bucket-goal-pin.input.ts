import { Field, InputType, Float } from '@nestjs/graphql';
import { IsLatitude, IsLongitude, IsNumber, IsOptional, IsString, MaxLength } from 'class-validator';

@InputType()
export class AddBucketGoalPinInput {
  @Field(() => Float)
  @IsNumber()
  @IsLatitude()
  lat: number;

  @Field(() => Float)
  @IsNumber()
  @IsLongitude()
  lng: number;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  @MaxLength(255)
  label?: string;
}
