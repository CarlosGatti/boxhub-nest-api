import { Field, ObjectType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { DefinedIntakeFormStatus } from '@generated/prisma/defined-intake-form-status.enum';
import { DefinedIntakeFormType } from '@generated/prisma/defined-intake-form-type.enum';

@ObjectType()
export class DefinedIntakeRespondentView {
  @Field(() => DefinedIntakeFormType)
  formType: DefinedIntakeFormType;

  @Field(() => DefinedIntakeFormStatus)
  status: DefinedIntakeFormStatus;

  @Field(() => String)
  title: string;

  @Field(() => String, { nullable: true })
  description?: string | null;

  @Field(() => GraphQLJSON)
  template: unknown;

  /** Helps the respondent recognize who this brief is for (no sensitive internal IDs). */
  @Field(() => String)
  clientDisplayName: string;

  @Field(() => String, { nullable: true })
  projectName?: string | null;
}
