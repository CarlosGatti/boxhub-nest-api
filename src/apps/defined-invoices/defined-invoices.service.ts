import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { randomBytes } from 'crypto';
import {
  DefinedInvoiceStatus,
  DefinedInvoicePaymentStatus,
  LogAction,
  Prisma,
} from '@prisma/client';
import { Decimal } from '@prisma/client/runtime/library';
import { PrismaService } from '../../core/prisma/prisma.service';
import { createLog } from '../../core/services/create-log';
import { MailService } from '../../core/services/providers/mail/mail.service';
import { CreateDefinedInvoiceInput } from './dto/create-defined-invoice.input';
import { CreateDefinedInvoiceItemInput } from './dto/create-defined-invoice-item.input';
import { SendDefinedInvoiceEmailInput } from './dto/send-defined-invoice-email.input';
import { DefinedInvoiceRecipientView } from './types/defined-invoice-recipient-view.type';
import { UpdateDefinedInvoiceInput } from './dto/update-defined-invoice.input';

@Injectable()
export class DefinedInvoicesService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly mailService: MailService,
  ) {}

  async listInvoices(
    projectId?: number,
    clientId?: number,
    status?: DefinedInvoiceStatus,
  ) {
    return this.prisma.definedInvoice.findMany({
      where: {
        projectId,
        clientId,
        status,
      },
      include: { items: { orderBy: { sortOrder: 'asc' } } },
      orderBy: { createdAt: 'desc' },
    });
  }

  async getInvoice(id: number) {
    const invoice = await this.prisma.definedInvoice.findUnique({
      where: { id },
      include: { items: { orderBy: { sortOrder: 'asc' } } },
    });
    if (!invoice) {
      throw new NotFoundException(`Defined invoice ${id} not found`);
    }
    return invoice;
  }

  async getProjectInvoices(projectId: number) {
    return this.prisma.definedInvoice.findMany({
      where: { projectId },
      include: { items: { orderBy: { sortOrder: 'asc' } } },
      orderBy: { createdAt: 'desc' },
    });
  }

  async createInvoice(input: CreateDefinedInvoiceInput, userId?: number) {
    return this.prisma.$transaction(async (tx) => {
      const project = await tx.definedProject.findUnique({
        where: { id: input.projectId },
        include: { client: true },
      });
      if (!project) {
        throw new NotFoundException(`Defined project ${input.projectId} not found`);
      }

      const issueDate = input.issueDate ?? new Date();
      const invoiceNumber = await this.generateInvoiceNumber(tx, issueDate);
      const items = this.mapItems(input.items);
      const totals = this.calculateTotals(items);

      return tx.definedInvoice.create({
        data: {
          projectId: project.id,
          clientId: project.clientId,
          invoiceNumber,
          currency: input.currency ?? 'USD',
          issueDate,
          dueDate: input.dueDate,
          paymentInstructions: input.paymentInstructions,
          notes: input.notes,
          terms: input.terms,
          subtotal: totals.subtotal,
          discountAmount: new Decimal(0),
          taxAmount: new Decimal(0),
          total: totals.total,
          createdById: userId,
          items: { create: items },
        },
        include: { items: { orderBy: { sortOrder: 'asc' } } },
      });
    });
  }

  async updateInvoice(id: number, input: UpdateDefinedInvoiceInput) {
    return this.prisma.$transaction(async (tx) => {
      const invoice = await tx.definedInvoice.findUnique({
        where: { id },
        include: { items: true },
      });
      if (!invoice) {
        throw new NotFoundException(`Defined invoice ${id} not found`);
      }

      const data: Prisma.DefinedInvoiceUpdateInput = {
        currency: input.currency,
        issueDate: input.issueDate,
        dueDate: input.dueDate,
        paymentInstructions: input.paymentInstructions,
        notes: input.notes,
        terms: input.terms,
        status: input.status as DefinedInvoiceStatus | undefined,
      };

      if (input.items) {
        const nextItems = this.mapItems(input.items);
        const totals = this.calculateTotals(nextItems);
        data.subtotal = totals.subtotal;
        data.total = totals.total;

        await tx.definedInvoiceItem.deleteMany({ where: { invoiceId: id } });
        await tx.definedInvoiceItem.createMany({
          data: nextItems.map((item) => ({ ...item, invoiceId: id })),
        });
      }

      return tx.definedInvoice.update({
        where: { id },
        data,
        include: { items: { orderBy: { sortOrder: 'asc' } } },
      });
    });
  }

  async deleteInvoice(id: number) {
    const invoice = await this.prisma.definedInvoice.findUnique({
      where: { id },
    });
    if (!invoice) {
      throw new NotFoundException(`Defined invoice ${id} not found`);
    }
    if (invoice.status !== DefinedInvoiceStatus.DRAFT) {
      throw new BadRequestException('Only DRAFT invoices can be deleted');
    }

    await this.prisma.definedInvoice.delete({ where: { id } });
    return true;
  }

  async sendInvoice(id: number) {
    const existing = await this.ensureInvoice(id);
    return this.prisma.definedInvoice.update({
      where: { id },
      data: {
        status: DefinedInvoiceStatus.SENT,
        sentAt: existing.sentAt ?? new Date(),
        publicToken: this.ensurePublicToken(existing.publicToken),
      },
      include: { items: { orderBy: { sortOrder: 'asc' } } },
    });
  }

  async markInvoicePaid(id: number) {
    await this.ensureInvoice(id);
    return this.prisma.definedInvoice.update({
      where: { id },
      data: {
        status: DefinedInvoiceStatus.PAID,
        paymentStatus: DefinedInvoicePaymentStatus.PAID,
        paidAt: new Date(),
      },
      include: { items: { orderBy: { sortOrder: 'asc' } } },
    });
  }

  async cancelInvoice(id: number) {
    await this.ensureInvoice(id);
    return this.prisma.definedInvoice.update({
      where: { id },
      data: { status: DefinedInvoiceStatus.CANCELLED },
      include: { items: { orderBy: { sortOrder: 'asc' } } },
    });
  }

  async sendInvoiceEmail(
    invoiceId: number,
    input?: SendDefinedInvoiceEmailInput,
    userId?: number,
    locale = 'en',
  ) {
    const invoice = await this.prisma.definedInvoice.findUnique({
      where: { id: invoiceId },
      include: {
        client: true,
        project: true,
        items: { orderBy: { sortOrder: 'asc' } },
      },
    });

    if (!invoice) {
      throw new NotFoundException(`Defined invoice ${invoiceId} not found`);
    }

    if (invoice.status === DefinedInvoiceStatus.CANCELLED) {
      throw new BadRequestException('Cannot send email for CANCELLED invoice');
    }

    const recipient = input?.to?.trim() || invoice.client.email?.trim();
    if (!recipient) {
      throw new BadRequestException('Invoice client has no email');
    }

    const publicToken = this.ensurePublicToken(invoice.publicToken);
    const invoiceUrl =
      this.buildPublicInvoiceUrl(publicToken, locale) ?? invoice.pdfUrl ?? null;

    if (!invoiceUrl && !invoice.pdfUrl) {
      throw new BadRequestException(
        'Invoice PDF is not available yet and public invoice URL is not configured.',
      );
    }

    const subject =
      input?.subject?.trim() ||
      `Invoice ${invoice.invoiceNumber} from Defined`;

    const defaultMessage = this.defaultInvoiceMessage({
      clientName:
        invoice.client.companyName ||
        invoice.client.contactName ||
        invoice.client.email,
      invoiceNumber: invoice.invoiceNumber,
      projectName: invoice.project.name,
      currency: invoice.currency,
      total: invoice.total.toFixed(2),
      dueDate: invoice.dueDate
        ? invoice.dueDate.toISOString().slice(0, 10)
        : 'N/A',
      invoiceUrl: invoiceUrl ?? 'N/A',
    });

    const bodyMessage = input?.message?.trim() || defaultMessage;

    const shouldAttachPdf = input?.attachPdf ?? true;
    const attachments =
      !shouldAttachPdf || !invoice.pdfUrl
        ? []
        : this.buildPdfAttachments(invoice.pdfUrl, invoice.invoiceNumber);

    let sent = false;
    try {
      sent = await this.mailService.send({
        path: 'defined_invoice_email',
        to: recipient,
        cc: input?.cc,
        subject,
        variables: {
          subject,
          clientName:
            invoice.client.companyName ||
            invoice.client.contactName ||
            invoice.client.email,
          invoiceNumber: invoice.invoiceNumber,
          projectName: invoice.project.name,
          currency: invoice.currency,
          total: invoice.total.toFixed(2),
          dueDate: invoice.dueDate
            ? invoice.dueDate.toISOString().slice(0, 10)
            : 'N/A',
          invoiceUrl,
          customMessage: bodyMessage,
        },
        attachments,
      });
    } catch (error) {
      throw new InternalServerErrorException(
        `Failed to send invoice email: ${
          error instanceof Error ? error.message : 'unknown error'
        }`,
      );
    }

    if (!sent) {
      throw new InternalServerErrorException('Failed to send invoice email');
    }

    const updated = await this.prisma.definedInvoice.update({
      where: { id: invoice.id },
      data: {
        ...(invoice.status === DefinedInvoiceStatus.DRAFT && {
          status: DefinedInvoiceStatus.SENT,
        }),
        ...(invoice.sentAt ? {} : { sentAt: new Date() }),
        ...(invoice.publicToken ? {} : { publicToken }),
      },
      include: { items: { orderBy: { sortOrder: 'asc' } } },
    });

    try {
      await createLog({
        action: LogAction.CUSTOM_ACTION,
        userId,
        details: 'Defined invoice email sent',
        route: 'sendDefinedInvoiceEmail',
        metadata: {
          invoiceId: invoice.id,
          invoiceNumber: invoice.invoiceNumber,
          projectId: invoice.projectId,
          clientId: invoice.clientId,
          to: recipient,
        },
      });
    } catch {
      // Do not fail mutation because of logging failure.
    }

    return updated;
  }

  private async generateInvoiceNumber(tx: Prisma.TransactionClient, issueDate: Date) {
    const year = issueDate.getUTCFullYear();
    const start = new Date(Date.UTC(year, 0, 1, 0, 0, 0));
    const end = new Date(Date.UTC(year, 11, 31, 23, 59, 59, 999));

    const count = await tx.definedInvoice.count({
      where: {
        issueDate: {
          gte: start,
          lte: end,
        },
      },
    });

    const next = String(count + 1).padStart(4, '0');
    return `INV-${year}-${next}`;
  }

  private mapItems(items: CreateDefinedInvoiceItemInput[]) {
    if (!items.length) {
      throw new BadRequestException('Invoice must have at least one item');
    }

    return items.map((item, index) => {
      const quantity = new Decimal(item.quantity);
      const unitPrice = new Decimal(item.unitPrice);
      return {
        description: item.description.trim(),
        quantity,
        unitPrice,
        total: quantity.mul(unitPrice),
        sortOrder: item.sortOrder ?? index,
      };
    });
  }

  private calculateTotals(
    items: Array<{
      quantity: Decimal;
      unitPrice: Decimal;
      total: Decimal;
      sortOrder: number;
      description: string;
    }>,
  ) {
    const subtotal = items.reduce((acc, item) => acc.add(item.total), new Decimal(0));
    const discount = new Decimal(0);
    const tax = new Decimal(0);
    const total = subtotal.sub(discount).add(tax);
    return { subtotal, total };
  }

  private async ensureInvoice(id: number) {
    const invoice = await this.prisma.definedInvoice.findUnique({ where: { id } });
    if (!invoice) {
      throw new NotFoundException(`Defined invoice ${id} not found`);
    }
    return invoice;
  }

  private ensurePublicToken(publicToken?: string | null) {
    return publicToken || randomBytes(24).toString('hex');
  }

  private buildPublicInvoiceUrl(publicToken: string, locale = 'en'): string | null {
    const baseUrl =
      process.env.DEFINED_FRONTEND_URL?.trim() ||
      process.env.DEFINED_APP_URL?.trim();
    if (!baseUrl) {
      return null;
    }
    const safeLocale = (locale || 'en').trim().toLowerCase() || 'en';
    return `${baseUrl.replace(/\/$/, '')}/${safeLocale}/forms/invoice/${publicToken}`;
  }

  private defaultInvoiceMessage(input: {
    clientName: string;
    invoiceNumber: string;
    projectName: string;
    currency: string;
    total: string;
    dueDate: string;
    invoiceUrl: string;
  }) {
    return `Hi ${input.clientName},

I hope you're doing well.

Please find attached invoice ${input.invoiceNumber} for ${input.projectName}.

Total: ${input.currency} ${input.total}
Due date: ${input.dueDate}

You can also view/download the invoice here:
${input.invoiceUrl}

Thank you,
Defined`;
  }

  private buildPdfAttachments(pdfUrl: string, invoiceNumber: string) {
    // TODO: if/when local PDF generation is implemented, attach generated file path.
    // For now, attach only if pdfUrl is an absolute URL supported by nodemailer.
    if (!/^https?:\/\//i.test(pdfUrl)) {
      return [];
    }

    return [
      {
        filename: `${invoiceNumber}.pdf`,
        path: pdfUrl,
      },
    ];
  }

  async getInvoiceForRecipient(token: string): Promise<DefinedInvoiceRecipientView> {
    const normalizedToken = token?.trim();
    if (!normalizedToken) {
      throw new BadRequestException('Invalid invoice token');
    }

    const invoice = await this.prisma.definedInvoice.findFirst({
      where: { publicToken: normalizedToken },
      include: {
        client: true,
        project: true,
        items: { orderBy: { sortOrder: 'asc' } },
      },
    });

    if (!invoice) {
      throw new NotFoundException('Invoice link not found');
    }

    return {
      id: invoice.id,
      invoiceNumber: invoice.invoiceNumber,
      status: invoice.status,
      issueDate: invoice.issueDate,
      dueDate: invoice.dueDate,
      subtotal: Number(invoice.subtotal),
      total: Number(invoice.total),
      currency: invoice.currency,
      paymentInstructions: invoice.paymentInstructions,
      notes: invoice.notes,
      terms: invoice.terms,
      pdfUrl: invoice.pdfUrl,
      clientDisplayName:
        invoice.client.companyName || invoice.client.contactName || invoice.client.email,
      projectName: invoice.project.name,
      items: invoice.items,
    };
  }
}
