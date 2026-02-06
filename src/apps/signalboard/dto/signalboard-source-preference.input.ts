import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class SignalboardSourcePreferenceInput {
  @Field(() => Boolean, { nullable: true })
  notifyOnNew?: boolean;

  @Field(() => Boolean, { nullable: true })
  isMuted?: boolean;

  @Field(() => Date, { nullable: true })
  mutedUntil?: Date;
}
