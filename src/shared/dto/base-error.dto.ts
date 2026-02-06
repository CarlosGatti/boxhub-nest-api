import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class BaseResult {
  @Field(() => Boolean)
  success: boolean;

  @Field(() => String)
  message: string;
}
