import { Field, Float, Int, ObjectType } from '@nestjs/graphql';
import { DefinedInvoiceItem } from '@generated/defined-invoice-item/defined-invoice-item.model';
import { DefinedInvoiceStatus } from '@generated/prisma/defined-invoice-status.enum';

@ObjectType()
export class DefinedInvoiceRecipientView {
  @Field(() => Int)
  id: number;

  @Field(() => String, { nullable: true })
  invoiceNumber?: string | null;

  @Field(() => DefinedInvoiceStatus, { nullable: true })
  status?: keyof typeof DefinedInvoiceStatus | null;

  @Field(() => Date, { nullable: true })
  issueDate?: Date | null;

  @Field(() => Date, { nullable: true })
  dueDate?: Date | null;

  @Field(() => Float)
  subtotal: number;

  @Field(() => Float)
  total: number;

  @Field(() => String)
  currency: string;

  @Field(() => String, { nullable: true })
  paymentInstructions?: string | null;

  @Field(() => String, { nullable: true })
  notes?: string | null;

  @Field(() => String, { nullable: true })
  terms?: string | null;

  @Field(() => String, { nullable: true })
  pdfUrl?: string | null;

  @Field(() => String, { nullable: true })
  clientDisplayName?: string | null;

  @Field(() => String, { nullable: true })
  projectName?: string | null;

  @Field(() => [DefinedInvoiceItem])
  items: DefinedInvoiceItem[];
}
