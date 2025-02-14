import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class PaginationArgs {
  @Field(() => Int, { defaultValue: 10 })
  take: number;

  @Field(() => Int, { defaultValue: 0 })
  skip: number;
}
