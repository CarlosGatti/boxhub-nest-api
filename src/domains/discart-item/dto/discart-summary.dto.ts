import { Field, ObjectType, Float, Int } from '@nestjs/graphql';

@ObjectType()
export class DiscartSummary {
  @Field(() => Int, { nullable: false })
  totalActiveSellCount!: number;

  @Field(() => Float, { nullable: false })
  totalActiveSellValue!: number;

  @Field(() => Int, { nullable: false })
  totalSoldCount!: number;

  @Field(() => Int, { nullable: false })
  totalDonatedCount!: number;
}

