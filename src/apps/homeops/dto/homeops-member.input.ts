import { Field, ID, InputType } from '@nestjs/graphql';
import { HouseholdRole } from '@generated/prisma/household-role.enum';

@InputType()
export class HomeOpsMemberInput {
  @Field(() => ID)
  householdId: string;

  @Field(() => ID)
  userId: string;

  @Field(() => HouseholdRole)
  role: HouseholdRole;
}
