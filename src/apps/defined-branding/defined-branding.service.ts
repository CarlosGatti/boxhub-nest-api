import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import {
  DefinedBrandingAssetType,
  DefinedBrandingProjectStatus,
  DefinedBrandingSectionType,
  LogAction,
  Prisma,
} from '@prisma/client';
import { PrismaService } from '../../core/prisma/prisma.service';
import { createLog } from '../../core/services/create-log';
import { CreateDefinedBrandingAssetInput } from './dto/create-defined-branding-asset.input';
import { CreateDefinedBrandingProjectInput } from './dto/create-defined-branding-project.input';
import { CreateDefinedBrandingSectionInput } from './dto/create-defined-branding-section.input';
import { ReorderDefinedBrandingSectionsInput } from './dto/reorder-defined-branding-sections.input';
import { UpdateDefinedBrandingAssetInput } from './dto/update-defined-branding-asset.input';
import { UpdateDefinedBrandingProjectInput } from './dto/update-defined-branding-project.input';
import { UpdateDefinedBrandingProjectVisibilityInput } from './dto/update-defined-branding-project-visibility.input';
import { UpdateDefinedBrandingSectionInput } from './dto/update-defined-branding-section.input';
import { DefinedPublicBrandingProject } from './types/defined-public-branding-project.type';

const BRANDING_INCLUDE = {
  sections: { orderBy: { order: 'asc' as const } },
  assets: { orderBy: { order: 'asc' as const } },
};

const BRANDING_PUBLIC_INCLUDE = {
  ...BRANDING_INCLUDE,
  client: true,
  project: true,
};

type BrandingPublicEntity = Prisma.DefinedBrandingProjectGetPayload<{
  include: typeof BRANDING_PUBLIC_INCLUDE;
}>;

const PUBLIC_VISIBLE_STATUSES: DefinedBrandingProjectStatus[] = [
  DefinedBrandingProjectStatus.ACTIVE,
  DefinedBrandingProjectStatus.COMPLETED,
];

@Injectable()
export class DefinedBrandingService {
  constructor(private readonly prisma: PrismaService) {}

  async listBrandingProjects(
    clientId?: number,
    projectId?: number,
    status?: DefinedBrandingProjectStatus,
  ) {
    return this.prisma.definedBrandingProject.findMany({
      where: { clientId, projectId, status },
      include: BRANDING_INCLUDE,
      orderBy: { createdAt: 'desc' },
    });
  }

  async getBrandingProject(id: number) {
    return this.ensureBrandingProject(id);
  }

  async getBrandingProjectBySlug(slug: string) {
    const normalizedSlug = slug?.trim();
    if (!normalizedSlug) {
      throw new BadRequestException('slug is required');
    }
    const project = await this.prisma.definedBrandingProject.findUnique({
      where: { slug: normalizedSlug },
      include: BRANDING_INCLUDE,
    });
    if (!project) {
      throw new NotFoundException(`Defined branding project slug "${slug}" not found`);
    }
    return project;
  }

  async getBrandingProjectsByClient(clientId: number) {
    return this.prisma.definedBrandingProject.findMany({
      where: { clientId },
      include: BRANDING_INCLUDE,
      orderBy: { createdAt: 'desc' },
    });
  }

  async getBrandingProjectsByProject(projectId: number) {
    return this.prisma.definedBrandingProject.findMany({
      where: { projectId },
      include: BRANDING_INCLUDE,
      orderBy: { createdAt: 'desc' },
    });
  }

  async createBrandingProject(input: CreateDefinedBrandingProjectInput, userId?: number) {
    return this.prisma.$transaction(async (tx) => {
      await this.ensureClient(input.clientId, tx);
      if (input.projectId) {
        await this.ensureProject(input.projectId, input.clientId, tx);
      }

      const project = await tx.definedBrandingProject.create({
        data: {
          clientId: input.clientId,
          projectId: input.projectId,
          title: input.title,
          slug: input.slug.trim(),
          description: input.description,
          concept: input.concept,
          status: input.status ?? DefinedBrandingProjectStatus.DRAFT,
          isPublic: input.isPublic ?? false,
          publishedAt: input.publishedAt,
          isFeatured: input.isFeatured ?? false,
          coverImageUrl: input.coverImageUrl,
          brandManualPdfUrl: input.brandManualPdfUrl,
          sourcePdfFileName: input.sourcePdfFileName,
          metadata: input.metadata as Prisma.InputJsonValue | undefined,
        },
        include: BRANDING_INCLUDE,
      });

      await createLog({
        action: LogAction.CUSTOM_ACTION,
        userId,
        details: 'Defined branding project created',
        route: 'createDefinedBrandingProject',
        metadata: {
          brandingProjectId: project.id,
          clientId: project.clientId,
          projectId: project.projectId,
        },
      });

      return project;
    });
  }

  async updateBrandingProject(
    id: number,
    input: UpdateDefinedBrandingProjectInput,
    userId?: number,
  ) {
    return this.prisma.$transaction(async (tx) => {
      const existing = await this.ensureBrandingProject(id, tx);
      const nextClientId = input.clientId ?? existing.clientId;
      const nextProjectId = input.projectId ?? existing.projectId;

      if (input.clientId) {
        await this.ensureClient(input.clientId, tx);
      }
      if (nextProjectId) {
        await this.ensureProject(nextProjectId, nextClientId, tx);
      }

      const project = await tx.definedBrandingProject.update({
        where: { id },
        data: {
          clientId: input.clientId,
          projectId: input.projectId,
          title: input.title,
          slug: input.slug?.trim(),
          description: input.description,
          concept: input.concept,
          status: input.status,
          isPublic: input.isPublic,
          publishedAt: input.publishedAt,
          isFeatured: input.isFeatured,
          coverImageUrl: input.coverImageUrl,
          brandManualPdfUrl: input.brandManualPdfUrl,
          sourcePdfFileName: input.sourcePdfFileName,
          metadata: input.metadata as Prisma.InputJsonValue | undefined,
        },
        include: BRANDING_INCLUDE,
      });

      await createLog({
        action: LogAction.CUSTOM_ACTION,
        userId,
        details: 'Defined branding project updated',
        route: 'updateDefinedBrandingProject',
        metadata: { brandingProjectId: project.id },
      });

      return project;
    });
  }

  async updateBrandingProjectVisibility(
    id: number,
    input: UpdateDefinedBrandingProjectVisibilityInput,
    userId?: number,
  ) {
    const existing = await this.ensureBrandingProject(id);
    const project = await this.prisma.definedBrandingProject.update({
      where: { id },
      data: {
        isPublic: input.isPublic,
        publishedAt: input.isPublic
          ? input.publishedAt ?? existing.publishedAt ?? new Date()
          : null,
        isFeatured: input.isFeatured,
      },
      include: BRANDING_INCLUDE,
    });

    await createLog({
      action: LogAction.CUSTOM_ACTION,
      userId,
      details: 'Defined branding project visibility updated',
      route: 'updateDefinedBrandingProjectVisibility',
      metadata: {
        brandingProjectId: id,
        isPublic: project.isPublic,
        isFeatured: project.isFeatured,
      },
    });

    return project;
  }

  async archiveBrandingProject(id: number, userId?: number) {
    await this.ensureBrandingProject(id);
    const project = await this.prisma.definedBrandingProject.update({
      where: { id },
      data: { status: DefinedBrandingProjectStatus.ARCHIVED },
      include: BRANDING_INCLUDE,
    });

    await createLog({
      action: LogAction.CUSTOM_ACTION,
      userId,
      details: 'Defined branding project archived',
      route: 'archiveDefinedBrandingProject',
      metadata: { brandingProjectId: project.id },
    });

    return project;
  }

  async deleteBrandingProject(id: number) {
    await this.ensureBrandingProject(id);
    await this.prisma.definedBrandingProject.delete({ where: { id } });
    return true;
  }

  async createBrandingSection(input: CreateDefinedBrandingSectionInput, userId?: number) {
    await this.ensureBrandingProject(input.brandingProjectId);
    const section = await this.prisma.definedBrandingSection.create({
      data: {
        brandingProjectId: input.brandingProjectId,
        type: input.type as DefinedBrandingSectionType,
        title: input.title,
        body: input.body,
        contentJson: input.contentJson as Prisma.InputJsonValue | undefined,
        order: input.order ?? 0,
      },
    });

    await createLog({
      action: LogAction.CUSTOM_ACTION,
      userId,
      details: 'Defined branding section created',
      route: 'createDefinedBrandingSection',
      metadata: {
        brandingProjectId: input.brandingProjectId,
        sectionId: section.id,
      },
    });

    return section;
  }

  async updateBrandingSection(
    id: number,
    input: UpdateDefinedBrandingSectionInput,
    userId?: number,
  ) {
    const section = await this.ensureBrandingSection(id);
    const updated = await this.prisma.definedBrandingSection.update({
      where: { id },
      data: {
        type: input.type as DefinedBrandingSectionType | undefined,
        title: input.title,
        body: input.body,
        contentJson: input.contentJson as Prisma.InputJsonValue | undefined,
        order: input.order,
      },
    });

    await createLog({
      action: LogAction.CUSTOM_ACTION,
      userId,
      details: 'Defined branding section updated',
      route: 'updateDefinedBrandingSection',
      metadata: {
        brandingProjectId: section.brandingProjectId,
        sectionId: id,
      },
    });

    return updated;
  }

  async reorderBrandingSections(input: ReorderDefinedBrandingSectionsInput, userId?: number) {
    await this.ensureBrandingProject(input.brandingProjectId);

    const sectionIds = input.items.map((item) => item.id);
    const existingSections = await this.prisma.definedBrandingSection.findMany({
      where: {
        id: { in: sectionIds },
        brandingProjectId: input.brandingProjectId,
      },
      select: { id: true },
    });

    if (existingSections.length !== sectionIds.length) {
      throw new BadRequestException(
        'One or more sections do not belong to the informed branding project',
      );
    }

    await this.prisma.$transaction(
      input.items.map((item) =>
        this.prisma.definedBrandingSection.update({
          where: { id: item.id },
          data: { order: item.order },
        }),
      ),
    );

    await createLog({
      action: LogAction.CUSTOM_ACTION,
      userId,
      details: 'Defined branding sections reordered',
      route: 'reorderDefinedBrandingSections',
      metadata: {
        brandingProjectId: input.brandingProjectId,
        count: input.items.length,
      },
    });

    return this.prisma.definedBrandingSection.findMany({
      where: { brandingProjectId: input.brandingProjectId },
      orderBy: { order: 'asc' },
    });
  }

  async deleteBrandingSection(id: number) {
    await this.ensureBrandingSection(id);
    await this.prisma.definedBrandingSection.delete({ where: { id } });
    return true;
  }

  async createBrandingAsset(input: CreateDefinedBrandingAssetInput, userId?: number) {
    await this.ensureBrandingProject(input.brandingProjectId);
    const asset = await this.prisma.definedBrandingAsset.create({
      data: {
        brandingProjectId: input.brandingProjectId,
        type: input.type as DefinedBrandingAssetType,
        name: input.name,
        fileUrl: input.fileUrl,
        fileName: input.fileName,
        mimeType: input.mimeType,
        notes: input.notes,
        metadata: input.metadata as Prisma.InputJsonValue | undefined,
        order: input.order ?? 0,
      },
    });

    await createLog({
      action: LogAction.CUSTOM_ACTION,
      userId,
      details: 'Defined branding asset created',
      route: 'createDefinedBrandingAsset',
      metadata: {
        brandingProjectId: input.brandingProjectId,
        assetId: asset.id,
      },
    });

    return asset;
  }

  async updateBrandingAsset(id: number, input: UpdateDefinedBrandingAssetInput, userId?: number) {
    const asset = await this.ensureBrandingAsset(id);
    const updated = await this.prisma.definedBrandingAsset.update({
      where: { id },
      data: {
        type: input.type as DefinedBrandingAssetType | undefined,
        name: input.name,
        fileUrl: input.fileUrl,
        fileName: input.fileName,
        mimeType: input.mimeType,
        notes: input.notes,
        metadata: input.metadata as Prisma.InputJsonValue | undefined,
        order: input.order,
      },
    });

    await createLog({
      action: LogAction.CUSTOM_ACTION,
      userId,
      details: 'Defined branding asset updated',
      route: 'updateDefinedBrandingAsset',
      metadata: {
        brandingProjectId: asset.brandingProjectId,
        assetId: id,
      },
    });

    return updated;
  }

  async deleteBrandingAsset(id: number) {
    await this.ensureBrandingAsset(id);
    await this.prisma.definedBrandingAsset.delete({ where: { id } });
    return true;
  }

  async listPublicBrandingProjects(
    status?: DefinedBrandingProjectStatus,
    featuredOnly = false,
    take = 24,
    skip = 0,
  ): Promise<DefinedPublicBrandingProject[]> {
    if (status && !PUBLIC_VISIBLE_STATUSES.includes(status)) {
      throw new BadRequestException('Status is not publicly visible');
    }

    const normalizedTake = Math.min(Math.max(take, 1), 100);
    const normalizedSkip = Math.max(skip, 0);

    const projects = await this.prisma.definedBrandingProject.findMany({
      where: {
        isPublic: true,
        status: status ?? { in: PUBLIC_VISIBLE_STATUSES },
        ...(featuredOnly ? { isFeatured: true } : {}),
      },
      include: BRANDING_PUBLIC_INCLUDE,
      orderBy: [
        { isFeatured: 'desc' },
        { publishedAt: 'desc' },
        { updatedAt: 'desc' },
      ],
      take: normalizedTake,
      skip: normalizedSkip,
    });

    return projects.map((project) => this.toPublicBrandingProject(project));
  }

  async getPublicBrandingProjectBySlug(
    slug: string,
  ): Promise<DefinedPublicBrandingProject | null> {
    const normalizedSlug = slug?.trim();
    if (!normalizedSlug) {
      throw new BadRequestException('slug is required');
    }

    const project = await this.prisma.definedBrandingProject.findUnique({
      where: { slug: normalizedSlug },
      include: BRANDING_PUBLIC_INCLUDE,
    });

    if (!project) {
      return null;
    }

    if (!project.isPublic || !PUBLIC_VISIBLE_STATUSES.includes(project.status)) {
      return null;
    }

    return this.toPublicBrandingProject(project);
  }

  private async ensureBrandingProject(
    id: number,
    tx: PrismaService | Prisma.TransactionClient = this.prisma,
  ) {
    const project = await tx.definedBrandingProject.findUnique({
      where: { id },
      include: BRANDING_INCLUDE,
    });
    if (!project) {
      throw new NotFoundException(`Defined branding project ${id} not found`);
    }
    return project;
  }

  private async ensureBrandingSection(id: number) {
    const section = await this.prisma.definedBrandingSection.findUnique({
      where: { id },
    });
    if (!section) {
      throw new NotFoundException(`Defined branding section ${id} not found`);
    }
    return section;
  }

  private async ensureBrandingAsset(id: number) {
    const asset = await this.prisma.definedBrandingAsset.findUnique({
      where: { id },
    });
    if (!asset) {
      throw new NotFoundException(`Defined branding asset ${id} not found`);
    }
    return asset;
  }

  private async ensureClient(
    clientId: number,
    tx: Prisma.TransactionClient,
  ) {
    const client = await tx.definedClient.findUnique({ where: { id: clientId } });
    if (!client) {
      throw new NotFoundException(`Defined client ${clientId} not found`);
    }
    return client;
  }

  private async ensureProject(
    projectId: number,
    clientId: number,
    tx: Prisma.TransactionClient,
  ) {
    const project = await tx.definedProject.findUnique({ where: { id: projectId } });
    if (!project) {
      throw new NotFoundException(`Defined project ${projectId} not found`);
    }
    if (project.clientId !== clientId) {
      throw new BadRequestException(
        'Defined project must belong to the selected client',
      );
    }
    return project;
  }

  private toPublicBrandingProject(
    project: BrandingPublicEntity,
  ): DefinedPublicBrandingProject {
    return {
      id: project.id,
      title: project.title,
      slug: project.slug,
      description: project.description,
      concept: project.concept,
      status: project.status,
      coverImageUrl: project.coverImageUrl,
      brandManualPdfUrl: project.brandManualPdfUrl,
      sourcePdfFileName: project.sourcePdfFileName,
      publishedAt: project.publishedAt,
      isFeatured: project.isFeatured,
      clientDisplayName:
        project.client.companyName ||
        project.client.contactName ||
        project.client.email ||
        null,
      projectName: project.project?.name ?? null,
      sections: project.sections
        .sort((a, b) => a.order - b.order)
        .map((section) => ({
          id: section.id,
          type: section.type,
          title: section.title,
          body: section.body,
          contentJson: section.contentJson,
          order: section.order,
        })),
      assets: project.assets
        .sort((a, b) => a.order - b.order)
        .map((asset) => ({
          id: asset.id,
          type: asset.type,
          name: asset.name,
          fileUrl: asset.fileUrl,
          fileName: asset.fileName,
          mimeType: asset.mimeType,
          order: asset.order,
        })),
      updatedAt: project.updatedAt,
    };
  }
}
