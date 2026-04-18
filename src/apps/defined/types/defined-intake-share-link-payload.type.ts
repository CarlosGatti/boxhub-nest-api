import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class DefinedIntakeShareLinkPayload {
  @Field(() => Int)
  intakeFormId: number;

  @Field(() => String)
  shareToken: string;

  @Field(() => String)
  relativePath: string;

  @Field(() => Date, { nullable: true })
  shareTokenExpiresAt?: Date | null;

  @Field(() => Date, { nullable: true })
  shareRevokedAt?: Date | null;
}
