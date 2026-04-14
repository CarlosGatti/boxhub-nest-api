import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class SubmitDefinedLeadPayload {
  @Field()
  success: boolean;

  @Field()
  message: string;

  @Field(() => Int, { nullable: true, description: 'Set when a row was persisted; omitted for honeypot discards.' })
  leadId?: number | null;

  @Field({ description: 'True when the lead was stored, or honeypot path returned a benign success.' })
  submissionAccepted: boolean;
}
