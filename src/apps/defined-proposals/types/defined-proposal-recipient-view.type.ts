import { Field, Float, Int, ObjectType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { DefinedProposalPricingType } from '@generated/prisma/defined-proposal-pricing-type.enum';
import { DefinedProposalSectionType } from '@generated/prisma/defined-proposal-section-type.enum';
import { DefinedProposalStatus } from '@generated/prisma/defined-proposal-status.enum';

@ObjectType()
export class DefinedProposalRecipientSection {
  @Field(() => DefinedProposalSectionType)
  type: keyof typeof DefinedProposalSectionType;

  @Field(() => String)
  title: string;

  @Field(() => String, { nullable: true })
  body?: string | null;

  @Field(() => GraphQLJSON, { nullable: true })
  contentJson?: unknown;

  @Field(() => Int)
  order: number;
}

@ObjectType()
export class DefinedProposalRecipientPricingOption {
  @Field(() => String)
  title: string;

  @Field(() => String, { nullable: true })
  description?: string | null;

  @Field(() => DefinedProposalPricingType)
  type: keyof typeof DefinedProposalPricingType;

  @Field(() => Float, { nullable: true })
  amount?: number | null;

  @Field(() => String)
  currency: string;

  @Field(() => String, { nullable: true })
  billingNote?: string | null;

  @Field(() => [String], { nullable: true })
  features?: string[];

  @Field(() => Boolean)
  isRecommended: boolean;

  @Field(() => Int)
  order: number;
}

@ObjectType()
export class DefinedProposalRecipientView {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  title: string;

  @Field(() => String, { nullable: true })
  subtitle?: string | null;

  @Field(() => String, { nullable: true })
  summary?: string | null;

  @Field(() => DefinedProposalStatus)
  status: keyof typeof DefinedProposalStatus;

  @Field(() => String)
  currency: string;

  @Field(() => Date, { nullable: true })
  sentAt?: Date | null;

  @Field(() => String, { nullable: true })
  clientDisplayName?: string | null;

  @Field(() => String, { nullable: true })
  projectName?: string | null;

  @Field(() => [DefinedProposalRecipientSection])
  sections: DefinedProposalRecipientSection[];

  @Field(() => [DefinedProposalRecipientPricingOption])
  pricingOptions: DefinedProposalRecipientPricingOption[];

  @Field(() => Date, { nullable: true })
  shareTokenExpiresAt?: Date | null;

  @Field(() => Date, { nullable: true })
  shareRevokedAt?: Date | null;
}
