import { Field, ID, InputType } from '@nestjs/graphql';
import { IsBoolean } from 'class-validator';

@InputType()
export class ToggleHomeOpsTaskTemplateInput {
  @Field(() => ID)
  id: string;

  @Field(() => Boolean)
  @IsBoolean()
  isActive: boolean;
}
