import { Field, InputType } from '@nestjs/graphql';
import { IsEnum, IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';
import { AssetType } from '@prisma/client';

@InputType()
export class CreateAssetInput {
  @Field(() => String)
  @IsEnum(AssetType)
  @IsNotEmpty()
  type: AssetType;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  @MaxLength(20)
  ticker?: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  name: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  @MaxLength(3)
  currency?: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  @MaxLength(50)
  exchange?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  metadata?: string; // JSON string
}

