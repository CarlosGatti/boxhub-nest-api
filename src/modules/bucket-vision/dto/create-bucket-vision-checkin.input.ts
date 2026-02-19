import { Field, InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { IsOptional, IsString, MaxLength } from 'class-validator';

@InputType()
export class CreateBucketVisionCheckinInput {
  @Field(() => String, { nullable: true, description: 'e.g. 6_MONTH_REVIEW, MONTHLY_CHECKIN' })
  @IsString()
  @IsOptional()
  @MaxLength(50)
  kind?: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  @MaxLength(5000)
  notes?: string;

  @Field(() => GraphQLJSON, { nullable: true, description: '{ feeling, score, tags }' })
  @IsOptional()
  mood?: Record<string, unknown>;

  @Field(() => GraphQLJSON, { nullable: true })
  @IsOptional()
  snapshot?: Record<string, unknown>;
}
