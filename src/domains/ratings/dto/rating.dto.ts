import { Field, ObjectType, Int, Float } from '@nestjs/graphql';
import { Rating } from '@generated/rating/rating.model';

@ObjectType()
export class SellerRatingSummary {
  @Field(() => Float)
  average!: number;

  @Field(() => Int)
  total!: number;

  @Field(() => [Rating])
  ratings!: Rating[];
}

