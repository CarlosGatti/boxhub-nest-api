import { Field, ObjectType, Float, Int } from '@nestjs/graphql';

@ObjectType()
export class CashflowSummary {
  @Field(() => Float)
  totalIncome: number;

  @Field(() => Float)
  totalExpenses: number;

  @Field(() => Float)
  netCashflow: number;

  @Field(() => Float, { nullable: true })
  predictedIncome?: number;

  @Field(() => Float, { nullable: true })
  predictedExpenses?: number;

  @Field(() => Float, { nullable: true })
  predictedNetCashflow?: number;

  @Field(() => String)
  month: string;

  @Field(() => Int)
  year: number;
}

