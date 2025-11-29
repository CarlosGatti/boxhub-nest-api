import { Field, ObjectType, Int, Float } from '@nestjs/graphql';
import { User } from '../../../@generated/user/user.model';

@ObjectType()
export class Rating {
  @Field(() => Int)
  id!: number;

  @Field(() => Int)
  sellerId!: number;

  @Field(() => Int)
  buyerId!: number;

  @Field(() => Int)
  stars!: number;

  @Field(() => String, { nullable: true })
  comment?: string;

  @Field(() => User)
  buyer!: User;

  @Field(() => Date)
  createdAt!: Date;
}

@ObjectType()
export class SellerRatingSummary {
  @Field(() => Float)
  average!: number;

  @Field(() => Int)
  total!: number;

  @Field(() => [Rating])
  ratings!: Rating[];
}

