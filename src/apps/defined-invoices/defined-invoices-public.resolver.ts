import { Args, Query, Resolver } from '@nestjs/graphql';
import { DefinedInvoicesService } from './defined-invoices.service';
import { DefinedInvoiceRecipientView } from './types/defined-invoice-recipient-view.type';

@Resolver()
export class DefinedInvoicesPublicResolver {
  constructor(private readonly definedInvoicesService: DefinedInvoicesService) {}

  @Query(() => DefinedInvoiceRecipientView, {
    name: 'definedInvoiceForRecipient',
  })
  async definedInvoiceForRecipient(@Args('token') token: string) {
    return this.definedInvoicesService.getInvoiceForRecipient(token);
  }
}
