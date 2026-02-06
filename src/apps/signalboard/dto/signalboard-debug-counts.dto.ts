import { Field, Int, ObjectType, GraphQLISODateTime } from '@nestjs/graphql';

@ObjectType()
export class SignalboardDebugCounts {
  @Field(() => Int)
  sourcesTotal: number;

  @Field(() => Int)
  sourcesActive: number;

  @Field(() => Int)
  itemsTotal: number;

  @Field(() => Int)
  itemsActive: number;

  @Field(() => GraphQLISODateTime, { nullable: true })
  newestItemPublishedAt: Date | null;
}
