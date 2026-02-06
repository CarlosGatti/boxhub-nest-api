import { Field, InputType, Int } from '@nestjs/graphql';
import { IsEnum, IsInt, IsOptional, IsString, Min } from 'class-validator';
import { FeedSourceType } from '@generated/prisma/feed-source-type.enum';

@InputType()
export class CreateSignalboardSourceInput {
  @Field(() => Int)
  @IsInt()
  collectionId: number;

  @Field(() => FeedSourceType, { nullable: true, defaultValue: FeedSourceType.RSS })
  @IsOptional()
  @IsEnum(FeedSourceType)
  type?: FeedSourceType;

  @Field()
  @IsString()
  name: string;

  @Field()
  @IsString()
  url: string;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsInt()
  @Min(1)
  fetchEveryMin?: number;

  @Field(() => Boolean, { nullable: true, defaultValue: false })
  @IsOptional()
  includeShorts?: boolean;
}
