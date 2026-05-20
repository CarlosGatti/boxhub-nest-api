import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { randomBytes } from 'crypto';
import {
  DefinedIntakeFormStatus,
  DefinedIntakeFormType,
  DefinedProjectStatus,
  Prisma,
} from '@prisma/client';
import { PrismaService } from '../../core/prisma/prisma.service';
import { CreateDefinedClientInput } from './dto/create-defined-client.input';
import { UpdateDefinedClientInput } from './dto/update-defined-client.input';
import { CreateDefinedProjectInput } from './dto/create-defined-project.input';
import { UpdateDefinedProjectInput } from './dto/update-defined-project.input';
import { ChangeDefinedProjectStatusInput } from './dto/change-defined-project-status.input';
import { CreateDefinedInternalNoteInput } from './dto/create-defined-internal-note.input';
import { DefinedClientFilterInput } from './dto/defined-client-filter.input';
import { DefinedProjectFilterInput } from './dto/defined-project-filter.input';
import { CreateDefinedIntakeFormInput } from './dto/create-defined-intake-form.input';
import { SubmitDefinedIntakeFormInput } from './dto/submit-defined-intake-form.input';
import { MarkDefinedIntakeFormReviewedInput } from './dto/mark-defined-intake-form-reviewed.input';
import { SubmitDefinedIntakeFormByShareTokenInput } from './dto/submit-defined-intake-form-by-share-token.input';

@Injectable()
export class DefinedService {
  constructor(private readonly prisma: PrismaService) {}

  private readonly intakeTemplates: Record<DefinedIntakeFormType, any> = {
    BUSINESS_INTAKE: {
      formType: 'BUSINESS_INTAKE',
      title: 'Business Intake',
      groups: [
        { key: 'company_basics', label: 'Company basics' },
        { key: 'contact_details', label: 'Contact details' },
        { key: 'business_overview', label: 'Business overview' },
        { key: 'services_offered', label: 'Services offered' },
        { key: 'target_audience', label: 'Target audience' },
        { key: 'service_area', label: 'Service area' },
        { key: 'goals', label: 'Main goals' },
        { key: 'online_presence', label: 'Current online presence' },
      ],
    },
    BRANDING_BRIEF: {
      formType: 'BRANDING_BRIEF',
      title: 'Branding Brief',
      groups: [
        { key: 'brand_context', label: 'Existing or new brand' },
        { key: 'positioning', label: 'Desired perception' },
        { key: 'competitors', label: 'Competitors' },
        { key: 'style_preferences', label: 'Color and style preferences' },
        { key: 'references', label: 'References and inspirations' },
        { key: 'usage', label: 'Where the brand will be used' },
      ],
    },
    WEBSITE_BRIEF: {
      formType: 'WEBSITE_BRIEF',
      title: 'Website Brief',
      groups: [
        { key: 'current_site', label: 'Current website' },
        { key: 'site_goals', label: 'Site goals' },
        { key: 'pages', label: 'Pages needed' },
        { key: 'content', label: 'Services and content' },
        { key: 'references', label: 'Competitors and references' },
        { key: 'conversion', label: 'Lead forms and CTA' },
        { key: 'local_seo', label: 'Local SEO and service area' },
      ],
    },
    VIDEO_BRIEF: {
      formType: 'VIDEO_BRIEF',
      title: 'Video Brief',
      groups: [
        { key: 'objective', label: 'Objective of the video' },
        { key: 'location', label: 'Location and restrictions' },
        { key: 'timeline', label: 'Shoot date preferences' },
        { key: 'drone', label: 'Drone and safety requirements' },
        { key: 'references', label: 'References and desired format' },
        { key: 'campaign_usage', label: 'Ads usage and outcomes' },
      ],
    },
    ADS_BRIEF: {
      formType: 'ADS_BRIEF',
      title: 'Ads Brief',
      groups: [
        { key: 'campaign_objective', label: 'Campaign objective' },
        { key: 'targeting', label: 'Target area and audience' },
        { key: 'priorities', label: 'Services to prioritize' },
        { key: 'budget', label: 'Estimated ad budget' },
        { key: 'assets', label: 'Accounts and destination page' },
        { key: 'offer', label: 'Offer and call to action' },
        { key: 'competitors', label: 'Competitors' },
      ],
    },
  };

  private async ensureClient(clientId: number) {
    const client = await this.prisma.definedClient.findUnique({
      where: { id: clientId },
    });
    if (!client) {
      throw new NotFoundException(`Defined client ${clientId} not found`);
    }
    return client;
  }

  private async ensureProject(projectId: number) {
    const project = await this.prisma.definedProject.findUnique({
      where: { id: projectId },
    });
    if (!project) {
      throw new NotFoundException(`Defined project ${projectId} not found`);
    }
    return project;
  }

  private async ensureIntakeForm(intakeFormId: number) {
    const form = await this.prisma.definedIntakeForm.findUnique({
      where: { id: intakeFormId },
      include: { project: true },
    });
    if (!form) {
      throw new NotFoundException(`Defined intake form ${intakeFormId} not found`);
    }
    return form;
  }

  private normalizeAnswersForPersistence(
    answers: Array<{
      questionKey: string;
      questionLabel?: string | null;
      answerType: Prisma.DefinedIntakeAnswerCreateManyInput['answerType'];
      answerValue: unknown;
    }>,
    intakeFormId: number,
  ) {
    return answers.map((item) => {
      const questionKey = item.questionKey?.trim();
      if (!questionKey) {
        throw new BadRequestException('questionKey must not be empty');
      }
      return {
        intakeFormId,
        questionKey,
        questionLabel: item.questionLabel?.trim() || null,
        answerType: item.answerType,
        answerValue: item.answerValue as Prisma.InputJsonValue,
      };
    });
  }

  private async persistSubmittedAnswers(
    intakeFormId: number,
    answers: Array<{
      questionKey: string;
      questionLabel?: string | null;
      answerType: Prisma.DefinedIntakeAnswerCreateManyInput['answerType'];
      answerValue: unknown;
    }>,
  ) {
    const preparedAnswers = this.normalizeAnswersForPersistence(
      answers,
      intakeFormId,
    );

    await this.prisma.$transaction([
      this.prisma.definedIntakeAnswer.deleteMany({
        where: { intakeFormId },
      }),
      this.prisma.definedIntakeAnswer.createMany({
        data: preparedAnswers,
      }),
      this.prisma.definedIntakeForm.update({
        where: { id: intakeFormId },
        data: {
          status: DefinedIntakeFormStatus.SUBMITTED,
          submittedAt: new Date(),
        },
      }),
    ]);

    return this.prisma.definedIntakeForm.findUniqueOrThrow({
      where: { id: intakeFormId },
      include: {
        answers: {
          orderBy: { createdAt: 'asc' },
        },
      },
    });
  }

  async createClient(input: CreateDefinedClientInput) {
    return this.prisma.definedClient.create({
      data: {
        type: input.type,
        companyName: input.companyName,
        legalName: input.legalName,
        contactName: input.contactName,
        email: input.email,
        phone: input.phone,
        website: input.website,
        instagram: input.instagram,
        facebook: input.facebook,
        addressLine1: input.addressLine1,
        addressLine2: input.addressLine2,
        city: input.city,
        state: input.state,
        postalCode: input.postalCode,
        country: input.country,
        businessType: input.businessType,
        serviceArea: input.serviceArea,
        yearsInBusiness: input.yearsInBusiness,
        notes: input.notes,
      },
    });
  }

  async listClients(filter?: DefinedClientFilterInput, take = 50, skip = 0) {
    const where: Prisma.DefinedClientWhereInput = {};
    if (filter?.type) {
      where.type = filter.type;
    }
    if (filter?.search) {
      where.OR = [
        { companyName: { contains: filter.search, mode: 'insensitive' } },
        { contactName: { contains: filter.search, mode: 'insensitive' } },
        { email: { contains: filter.search, mode: 'insensitive' } },
      ];
    }
    return this.prisma.definedClient.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      take,
      skip,
    });
  }

  async getClient(id: number) {
    const client = await this.prisma.definedClient.findUnique({
      where: { id },
    });
    if (!client) {
      throw new NotFoundException(`Defined client ${id} not found`);
    }
    return client;
  }

  async updateClient(input: UpdateDefinedClientInput) {
    await this.ensureClient(input.id);
    const data: Prisma.DefinedClientUpdateInput = {};
    if (input.type !== undefined) data.type = input.type;
    if (input.companyName !== undefined) data.companyName = input.companyName;
    if (input.legalName !== undefined) data.legalName = input.legalName;
    if (input.contactName !== undefined) data.contactName = input.contactName;
    if (input.email !== undefined) data.email = input.email;
    if (input.phone !== undefined) data.phone = input.phone;
    if (input.website !== undefined) data.website = input.website;
    if (input.instagram !== undefined) data.instagram = input.instagram;
    if (input.facebook !== undefined) data.facebook = input.facebook;
    if (input.addressLine1 !== undefined) data.addressLine1 = input.addressLine1;
    if (input.addressLine2 !== undefined) data.addressLine2 = input.addressLine2;
    if (input.city !== undefined) data.city = input.city;
    if (input.state !== undefined) data.state = input.state;
    if (input.postalCode !== undefined) data.postalCode = input.postalCode;
    if (input.country !== undefined) data.country = input.country;
    if (input.businessType !== undefined) data.businessType = input.businessType;
    if (input.serviceArea !== undefined) data.serviceArea = input.serviceArea;
    if (input.yearsInBusiness !== undefined)
      data.yearsInBusiness = input.yearsInBusiness;
    if (input.notes !== undefined) data.notes = input.notes;

    return this.prisma.definedClient.update({
      where: { id: input.id },
      data,
    });
  }

  async createProject(input: CreateDefinedProjectInput) {
    await this.ensureClient(input.clientId);
    return this.prisma.definedProject.create({
      data: {
        clientId: input.clientId,
        name: input.name,
        serviceType: input.serviceType,
        status: input.status,
        budget: input.budget,
        deadline: input.deadline,
        source: input.source,
        assignedTo: input.assignedTo,
        supplierId: input.supplierId,
        notes: input.notes,
      },
    });
  }

  async listProjects(filter?: DefinedProjectFilterInput, take = 50, skip = 0) {
    const where: Prisma.DefinedProjectWhereInput = {};
    if (filter?.clientId) {
      where.clientId = filter.clientId;
    }
    if (filter?.status) {
      where.status = filter.status;
    }
    if (filter?.serviceType) {
      where.serviceType = filter.serviceType;
    }

    return this.prisma.definedProject.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      take,
      skip,
    });
  }

  async getProject(id: number) {
    const project = await this.prisma.definedProject.findUnique({
      where: { id },
    });
    if (!project) {
      throw new NotFoundException(`Defined project ${id} not found`);
    }
    return project;
  }

  async updateProject(input: UpdateDefinedProjectInput) {
    await this.ensureProject(input.id);
    if (input.clientId !== undefined) {
      await this.ensureClient(input.clientId);
    }

    const data: Prisma.DefinedProjectUpdateInput = {};
    if (input.clientId !== undefined) {
      data.client = { connect: { id: input.clientId } };
    }
    if (input.name !== undefined) data.name = input.name;
    if (input.serviceType !== undefined) data.serviceType = input.serviceType;
    if (input.status !== undefined) data.status = input.status;
    if (input.budget !== undefined) data.budget = input.budget;
    if (input.deadline !== undefined) data.deadline = input.deadline;
    if (input.source !== undefined) data.source = input.source;
    if (input.assignedTo !== undefined) data.assignedTo = input.assignedTo;
    if (input.supplierId !== undefined) data.supplierId = input.supplierId;
    if (input.notes !== undefined) data.notes = input.notes;

    return this.prisma.definedProject.update({
      where: { id: input.id },
      data,
    });
  }

  async changeProjectStatus(input: ChangeDefinedProjectStatusInput) {
    await this.ensureProject(input.id);
    return this.prisma.definedProject.update({
      where: { id: input.id },
      data: { status: input.status },
    });
  }

  async createInternalNote(input: CreateDefinedInternalNoteInput, authorId: number) {
    if (!input.clientId && !input.projectId) {
      throw new BadRequestException(
        'Provide at least clientId or projectId when creating a note',
      );
    }

    let projectClientId: number | undefined;
    if (input.projectId) {
      const project = await this.ensureProject(input.projectId);
      projectClientId = project.clientId;
    }
    if (input.clientId) {
      await this.ensureClient(input.clientId);
    }

    if (input.clientId && projectClientId && input.clientId !== projectClientId) {
      throw new BadRequestException(
        'projectId does not belong to the provided clientId',
      );
    }

    return this.prisma.definedInternalNote.create({
      data: {
        clientId: input.clientId,
        projectId: input.projectId,
        authorId,
        body: input.body,
      },
    });
  }

  async listInternalNotesByClient(clientId: number) {
    await this.ensureClient(clientId);
    return this.prisma.definedInternalNote.findMany({
      where: { clientId },
      orderBy: { createdAt: 'desc' },
    });
  }

  async listInternalNotesByProject(projectId: number) {
    await this.ensureProject(projectId);
    return this.prisma.definedInternalNote.findMany({
      where: { projectId },
      orderBy: { createdAt: 'desc' },
    });
  }

  async createIntakeForm(input: CreateDefinedIntakeFormInput) {
    await this.ensureClient(input.clientId);

    if (input.projectId) {
      const project = await this.ensureProject(input.projectId);
      if (project.clientId !== input.clientId) {
        throw new BadRequestException(
          'projectId does not belong to the provided clientId',
        );
      }
    }

    return this.prisma.definedIntakeForm.create({
      data: {
        clientId: input.clientId,
        projectId: input.projectId,
        formType: input.formType,
        status: input.status ?? DefinedIntakeFormStatus.DRAFT,
        title: input.title,
        description: input.description,
      },
    });
  }

  async listIntakeFormsByClient(clientId: number) {
    await this.ensureClient(clientId);
    return this.prisma.definedIntakeForm.findMany({
      where: { clientId },
      orderBy: { createdAt: 'desc' },
    });
  }

  async listIntakeFormsByProject(projectId: number) {
    await this.ensureProject(projectId);
    return this.prisma.definedIntakeForm.findMany({
      where: { projectId },
      orderBy: { createdAt: 'desc' },
    });
  }

  async getIntakeForm(id: number) {
    const form = await this.prisma.definedIntakeForm.findUnique({
      where: { id },
      include: {
        answers: {
          orderBy: { createdAt: 'asc' },
        },
      },
    });
    if (!form) {
      throw new NotFoundException(`Defined intake form ${id} not found`);
    }
    return form;
  }

  async submitIntakeForm(input: SubmitDefinedIntakeFormInput) {
    const form = await this.ensureIntakeForm(input.intakeFormId);
    if (form.project && form.project.status === DefinedProjectStatus.ARCHIVED) {
      throw new BadRequestException(
        'Cannot submit intake form for an archived project',
      );
    }
    return this.persistSubmittedAnswers(form.id, input.answers);
  }

  async markIntakeFormReviewed(input: MarkDefinedIntakeFormReviewedInput) {
    await this.ensureIntakeForm(input.intakeFormId);
    return this.prisma.definedIntakeForm.update({
      where: { id: input.intakeFormId },
      data: { status: DefinedIntakeFormStatus.REVIEWED },
    });
  }

  getIntakeTemplate(formType: DefinedIntakeFormType) {
    return this.intakeTemplates[formType] ?? null;
  }

  async generateIntakeShareLink(intakeFormId: number) {
    await this.ensureIntakeForm(intakeFormId);
    const token = randomBytes(32).toString('hex');

    const ttlHoursRaw = process.env.DEFINED_INTAKE_SHARE_TOKEN_TTL_HOURS;
    const ttlHours = ttlHoursRaw ? Number(ttlHoursRaw) : NaN;
    const shareTokenExpiresAt =
      Number.isFinite(ttlHours) && ttlHours > 0
        ? new Date(Date.now() + ttlHours * 60 * 60 * 1000)
        : null;

    const updated = await this.prisma.definedIntakeForm.update({
      where: { id: intakeFormId },
      data: {
        shareToken: token,
        shareTokenCreatedAt: new Date(),
        shareTokenExpiresAt,
        shareRevokedAt: null,
      },
    });

    return {
      intakeFormId: updated.id,
      shareToken: token,
      relativePath: `/forms/intake/${token}`,
      shareTokenExpiresAt: updated.shareTokenExpiresAt,
      shareRevokedAt: updated.shareRevokedAt,
    };
  }

  private async ensureIntakeFormByShareToken(token: string) {
    const normalized = token?.trim();
    if (!normalized) {
      throw new BadRequestException('Invalid token');
    }

    const form = await this.prisma.definedIntakeForm.findFirst({
      where: {
        shareToken: normalized,
        shareRevokedAt: null,
      },
      include: {
        project: true,
        client: true,
        answers: {
          orderBy: { createdAt: 'asc' },
        },
      },
    });

    if (!form) {
      throw new NotFoundException('Intake link not found or revoked');
    }

    if (form.shareTokenExpiresAt && form.shareTokenExpiresAt < new Date()) {
      throw new BadRequestException('Intake link has expired');
    }

    return form;
  }

  async getIntakeFormForRespondent(token: string) {
    const form = await this.ensureIntakeFormByShareToken(token);
    const client = form.client;
    const clientDisplayName =
      client?.companyName?.trim() ||
      client?.contactName?.trim() ||
      client?.email?.trim() ||
      'Client';
    return {
      formType: form.formType,
      status: form.status,
      title: form.title,
      description: form.description,
      template: this.getIntakeTemplate(form.formType),
      clientDisplayName,
      projectName: form.project?.name ?? null,
      answers: form.answers.map((answer) => ({
        questionKey: answer.questionKey,
        questionLabel: answer.questionLabel,
        answerType: answer.answerType,
        answerValue: answer.answerValue,
      })),
    };
  }

  async submitIntakeFormByShareToken(
    input: SubmitDefinedIntakeFormByShareTokenInput,
  ) {
    const form = await this.ensureIntakeFormByShareToken(input.token);

    if (
      form.status !== DefinedIntakeFormStatus.DRAFT &&
      form.status !== DefinedIntakeFormStatus.SENT
    ) {
      throw new BadRequestException(
        'This intake form is no longer accepting responses',
      );
    }

    if (form.project && form.project.status === DefinedProjectStatus.ARCHIVED) {
      throw new BadRequestException(
        'Cannot submit intake form for an archived project',
      );
    }

    return this.persistSubmittedAnswers(form.id, input.answers);
  }
}
