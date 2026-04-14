import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { Request } from 'express';
import { DefinedLeadsService } from './defined-leads.service';
import { SubmitDefinedLeadInput } from './dto/submit-defined-lead.input';
import { SubmitDefinedLeadPayload } from './types/submit-defined-lead-payload.type';

/** Public mutation for Defined landing pages — no JWT (same pattern as auth / public share queries). */
@Resolver()
export class DefinedLeadsResolver {
  constructor(private readonly definedLeadsService: DefinedLeadsService) {}

  @Mutation(() => SubmitDefinedLeadPayload, { name: 'submitDefinedLead' })
  async submitDefinedLead(
    @Args('input') input: SubmitDefinedLeadInput,
    @Context() ctx: { req: Request },
  ): Promise<SubmitDefinedLeadPayload> {
    return this.definedLeadsService.submit(input, ctx.req);
  }
}
