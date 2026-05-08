import { UseGuards } from '@nestjs/common';
import { Context } from '@nestjs/graphql';
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { DefinedInvoice } from '@generated/defined-invoice/defined-invoice.model';
import { DefinedInvoiceStatus } from '@generated/prisma/defined-invoice-status.enum';
import { User } from '@generated/user/user.model';
import { JwtAuthGuard } from '../../core/auth/guards/jwt-auth.guard';
import {
  AppPermissionGuard,
  RequireApp,
} from '../../core/auth/guards/app-permission.guard';
import { CurrentUser } from '../../domains/user/current-user.decorator';
import { CreateDefinedInvoiceInput } from './dto/create-defined-invoice.input';
import { SendDefinedInvoiceEmailInput } from './dto/send-defined-invoice-email.input';
import { UpdateDefinedInvoiceInput } from './dto/update-defined-invoice.input';
import { DefinedInvoicesService } from './defined-invoices.service';

@Resolver(() => DefinedInvoice)
@UseGuards(JwtAuthGuard, AppPermissionGuard)
export class DefinedInvoicesResolver {
  constructor(private readonly definedInvoicesService: DefinedInvoicesService) {}

  @RequireApp('DEFINED')
  @Query(() => [DefinedInvoice], { name: 'definedInvoices' })
  async definedInvoices(
    @Args('projectId', { type: () => Int, nullable: true }) projectId?: number,
    @Args('clientId', { type: () => Int, nullable: true }) clientId?: number,
    @Args('status', { type: () => DefinedInvoiceStatus, nullable: true })
    status?: DefinedInvoiceStatus,
  ) {
    return this.definedInvoicesService.listInvoices(projectId, clientId, status);
  }

  @RequireApp('DEFINED')
  @Query(() => DefinedInvoice, { name: 'definedInvoice' })
  async definedInvoice(@Args('id', { type: () => Int }) id: number) {
    return this.definedInvoicesService.getInvoice(id);
  }

  @RequireApp('DEFINED')
  @Query(() => [DefinedInvoice], { name: 'definedProjectInvoices' })
  async definedProjectInvoices(
    @Args('projectId', { type: () => Int }) projectId: number,
  ) {
    return this.definedInvoicesService.getProjectInvoices(projectId);
  }

  @RequireApp('DEFINED')
  @Mutation(() => DefinedInvoice, { name: 'createDefinedInvoice' })
  async createDefinedInvoice(
    @Args('input') input: CreateDefinedInvoiceInput,
    @CurrentUser() user: User,
  ) {
    return this.definedInvoicesService.createInvoice(input, user.id);
  }

  @RequireApp('DEFINED')
  @Mutation(() => DefinedInvoice, { name: 'updateDefinedInvoice' })
  async updateDefinedInvoice(
    @Args('id', { type: () => Int }) id: number,
    @Args('input') input: UpdateDefinedInvoiceInput,
  ) {
    return this.definedInvoicesService.updateInvoice(id, input);
  }

  @RequireApp('DEFINED')
  @Mutation(() => Boolean, { name: 'deleteDefinedInvoice' })
  async deleteDefinedInvoice(@Args('id', { type: () => Int }) id: number) {
    return this.definedInvoicesService.deleteInvoice(id);
  }

  @RequireApp('DEFINED')
  @Mutation(() => DefinedInvoice, { name: 'sendDefinedInvoice' })
  async sendDefinedInvoice(@Args('id', { type: () => Int }) id: number) {
    return this.definedInvoicesService.sendInvoice(id);
  }

  @RequireApp('DEFINED')
  @Mutation(() => DefinedInvoice, { name: 'markDefinedInvoicePaid' })
  async markDefinedInvoicePaid(@Args('id', { type: () => Int }) id: number) {
    return this.definedInvoicesService.markInvoicePaid(id);
  }

  @RequireApp('DEFINED')
  @Mutation(() => DefinedInvoice, { name: 'cancelDefinedInvoice' })
  async cancelDefinedInvoice(@Args('id', { type: () => Int }) id: number) {
    return this.definedInvoicesService.cancelInvoice(id);
  }

  @RequireApp('DEFINED')
  @Mutation(() => DefinedInvoice, { name: 'sendDefinedInvoiceEmail' })
  async sendDefinedInvoiceEmail(
    @Args('id', { type: () => Int }) id: number,
    @Args('input', { nullable: true }) input?: SendDefinedInvoiceEmailInput,
    @CurrentUser() user?: User,
    @Context() context?: any,
  ) {
    const locale = this.extractLocaleFromContext(context);
    return this.definedInvoicesService.sendInvoiceEmail(id, input, user?.id, locale);
  }

  private extractLocaleFromContext(context?: any): string {
    const directLocale =
      context?.locale ||
      context?.lang ||
      context?.language ||
      context?.req?.locale ||
      context?.req?.lang;

    if (typeof directLocale === 'string' && directLocale.trim()) {
      return directLocale.trim().split('-')[0].toLowerCase();
    }

    const acceptLanguage = context?.req?.headers?.['accept-language'];
    if (typeof acceptLanguage === 'string' && acceptLanguage.trim()) {
      const first = acceptLanguage.split(',')[0]?.trim();
      if (first) {
        return first.split('-')[0].toLowerCase();
      }
    }

    return 'en';
  }
}
