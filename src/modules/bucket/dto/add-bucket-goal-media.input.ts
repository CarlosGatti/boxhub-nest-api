import { Field, InputType, Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { IsEnum, IsInt, IsOptional, IsString, MaxLength } from 'class-validator';
import { BucketMediaType } from '@generated/prisma/bucket-media-type.enum';

/**
 * Add BucketGoalMedia. Exactly one of goalId or logId must be provided (XOR).
 * - goalId: media attached to goal (e.g. cover alternative, gallery)
 * - logId: media attached to a log entry (memory/event photo)
 */
@InputType()
export class AddBucketGoalMediaInput {
  @Field(() => Int, {
    nullable: true,
    description: 'Goal ID — use for goal-level media. Mutually exclusive with logId.',
  })
  @IsOptional()
  @IsInt()
  goalId?: number;

  @Field(() => Int, {
    nullable: true,
    description: 'Log ID — use for log attachment. Mutually exclusive with goalId.',
  })
  @IsOptional()
  @IsInt()
  logId?: number;

  @Field(() => String, { description: 'Media URL (from upload endpoint or external)' })
  @IsString()
  @MaxLength(2048)
  url!: string;

  @Field(() => BucketMediaType, { nullable: true, defaultValue: 'IMAGE' })
  @IsEnum(BucketMediaType)
  @IsOptional()
  type?: BucketMediaType;

  @Field(() => GraphQLJSON, { nullable: true, description: 'Optional metadata' })
  @IsOptional()
  metadata?: Record<string, unknown>;
}
