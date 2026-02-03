import { Field, InputType } from '@nestjs/graphql';
import { IsString, MaxLength } from 'class-validator';

@InputType()
export class CreateHomeOpsHouseholdInput {
  @Field(() => String)
  @IsString()
  @MaxLength(120)
  name: string;
}
