import { Field, ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { BucketShareType } from '@generated/prisma/bucket-share-type.enum';
import { GraphQLJSON } from 'graphql-type-json';

/**
 * Summary for owner's list (id, token, type, title, createdAt).
 * Does not include payload to keep response small.
 */
@ObjectType()
export class BucketShareSummary {
  @Field(() => ID)
  id!: number;

  @Field(() => String)
  token!: string;

  @Field(() => BucketShareType)
  type!: keyof typeof BucketShareType;

  @Field(() => String, { nullable: true })
  title?: string | null;

  @Field(() => Date)
  createdAt!: Date;
}

/**
 * Public read response — payload is the frozen snapshot.
 * No auth required.
 */
@ObjectType()
export class BucketSharePublic {
  @Field(() => String)
  token!: string;

  @Field(() => BucketShareType)
  type!: keyof typeof BucketShareType;

  @Field(() => GraphQLJSON, { description: 'Frozen snapshot payload (version 1)' })
  payload!: Record<string, unknown>;

  @Field(() => Date)
  createdAt!: Date;
}
