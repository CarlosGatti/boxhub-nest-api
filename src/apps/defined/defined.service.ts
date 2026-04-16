import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../../core/prisma/prisma.service';
import { CreateDefinedClientInput } from './dto/create-defined-client.input';
import { UpdateDefinedClientInput } from './dto/update-defined-client.input';
import { CreateDefinedProjectInput } from './dto/create-defined-project.input';
import { UpdateDefinedProjectInput } from './dto/update-defined-project.input';
import { ChangeDefinedProjectStatusInput } from './dto/change-defined-project-status.input';
import { CreateDefinedInternalNoteInput } from './dto/create-defined-internal-note.input';
import { DefinedClientFilterInput } from './dto/defined-client-filter.input';
import { DefinedProjectFilterInput } from './dto/defined-project-filter.input';

@Injectable()
export class DefinedService {
  constructor(private readonly prisma: PrismaService) {}

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
}
