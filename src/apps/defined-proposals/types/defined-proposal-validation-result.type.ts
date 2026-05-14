import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class DefinedProposalValidationError {
  @Field(() => String)
  code: string;

  @Field(() => String, { nullable: true })
  field?: string;

  @Field(() => String)
  message: string;
}

@ObjectType()
export class DefinedProposalValidationResult {
  @Field(() => Boolean)
  isValid: boolean;

  @Field(() => [DefinedProposalValidationError])
  errors: DefinedProposalValidationError[];
}
