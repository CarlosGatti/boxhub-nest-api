import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class SignalboardIngestResult {
  @Field(() => Int)
  sourcesProcessed: number;

  @Field(() => Int)
  itemsSeen: number;

  @Field(() => Int)
  itemsCreated: number;

  @Field(() => Int)
  itemsUpdated: number;

  @Field(() => [String])
  errors: string[];
}
