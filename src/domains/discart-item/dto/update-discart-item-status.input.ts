import { Field, InputType, Int } from '@nestjs/graphql';
import { DiscartItemStatus } from '@generated/prisma/discart-item-status.enum';

@InputType()
export class UpdateDiscartItemStatusInput {
  @Field(() => Int, { nullable: false })
  id!: number;

  @Field(() => DiscartItemStatus, { nullable: false })
  status!: DiscartItemStatus;
}

