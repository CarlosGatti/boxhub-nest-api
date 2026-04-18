import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { DefinedIntakeForm } from '@generated/defined-intake-form/defined-intake-form.model';
import { DefinedService } from './defined.service';
import { DefinedIntakeRespondentView } from './types/defined-intake-respondent-view.type';
import { SubmitDefinedIntakeFormByShareTokenInput } from './dto/submit-defined-intake-form-by-share-token.input';

@Resolver()
export class DefinedPublicResolver {
  constructor(private readonly definedService: DefinedService) {}

  @Query(() => DefinedIntakeRespondentView, {
    name: 'definedIntakeFormForRespondent',
  })
  async definedIntakeFormForRespondent(@Args('token') token: string) {
    return this.definedService.getIntakeFormForRespondent(token);
  }

  @Mutation(() => DefinedIntakeForm, {
    name: 'submitDefinedIntakeFormByShareToken',
  })
  async submitDefinedIntakeFormByShareToken(
    @Args('input') input: SubmitDefinedIntakeFormByShareTokenInput,
  ) {
    return this.definedService.submitIntakeFormByShareToken(input);
  }
}
