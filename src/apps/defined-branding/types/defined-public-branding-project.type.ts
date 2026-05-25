import { Field, Int, ObjectType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { DefinedBrandingAssetType } from '@generated/prisma/defined-branding-asset-type.enum';
import { DefinedBrandingProjectStatus } from '@generated/prisma/defined-branding-project-status.enum';
import { DefinedBrandingSectionType } from '@generated/prisma/defined-branding-section-type.enum';

@ObjectType()
export class DefinedPublicBrandingSection {
  @Field(() => Int)
  id: number;

  @Field(() => DefinedBrandingSectionType)
  type: keyof typeof DefinedBrandingSectionType;

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
export class DefinedPublicBrandingAsset {
  @Field(() => Int)
  id: number;

  @Field(() => DefinedBrandingAssetType)
  type: keyof typeof DefinedBrandingAssetType;

  @Field(() => String)
  name: string;

  @Field(() => String)
  fileUrl: string;

  @Field(() => String, { nullable: true })
  fileName?: string | null;

  @Field(() => String, { nullable: true })
  mimeType?: string | null;

  @Field(() => Int)
  order: number;
}

@ObjectType()
export class DefinedPublicBrandingProject {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  title: string;

  @Field(() => String)
  slug: string;

  @Field(() => String, { nullable: true })
  description?: string | null;

  @Field(() => String, { nullable: true })
  concept?: string | null;

  @Field(() => DefinedBrandingProjectStatus)
  status: keyof typeof DefinedBrandingProjectStatus;

  @Field(() => String, { nullable: true })
  coverImageUrl?: string | null;

  @Field(() => String, { nullable: true })
  brandManualPdfUrl?: string | null;

  @Field(() => String, { nullable: true })
  sourcePdfFileName?: string | null;

  @Field(() => Date, { nullable: true })
  publishedAt?: Date | null;

  @Field(() => Boolean, { nullable: true })
  isFeatured?: boolean;

  @Field(() => String, { nullable: true })
  clientDisplayName?: string | null;

  @Field(() => String, { nullable: true })
  projectName?: string | null;

  @Field(() => [DefinedPublicBrandingSection])
  sections: DefinedPublicBrandingSection[];

  @Field(() => [DefinedPublicBrandingAsset])
  assets: DefinedPublicBrandingAsset[];

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | null;
}
