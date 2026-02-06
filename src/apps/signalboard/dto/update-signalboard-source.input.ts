import { Field, InputType, Int } from '@nestjs/graphql';
import { IsBoolean, IsEnum, IsInt, IsOptional, IsString, Min } from 'class-validator';
import { FeedSourceType } from '@generated/prisma/feed-source-type.enum';

@InputType()
export class UpdateSignalboardSourceInput {
  @Field(() => FeedSourceType, { nullable: true })
  @IsOptional()
  @IsEnum(FeedSourceType)
  type?: FeedSourceType;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  name?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  url?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsInt()
  @Min(1)
  fetchEveryMin?: number;

  @Field(() => Boolean, { nullable: true })
  @IsOptional()
  @IsBoolean()
  includeShorts?: boolean;
}
