import { Field, ID, InputType } from '@nestjs/graphql';
import { IsString, MaxLength } from 'class-validator';

@InputType()
export class RenameHomeOpsHouseholdInput {
  @Field(() => ID)
  householdId: string;

  @Field(() => String)
  @IsString()
  @MaxLength(120)
  name: string;
}
