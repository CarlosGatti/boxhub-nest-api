import { Prisma, Subcontractor } from "@prisma/client";
import { createWriteStream, existsSync, mkdirSync } from "fs";

import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma.service";
import { createLog } from "src/services/create-log";
import { join } from "path";

@Injectable()
export class SubcontractorService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Prisma.SubcontractorCreateInput): Promise<Subcontractor> {
    //create subcontractor
    const subcontractor = await this.prisma.subcontractor.create({ data });

    //create a log entry for subcontractor creation
    await createLog({
      action: "SUBCONTRACTOR_CREATED",
      details: `Subcontractor ${data.companyName}'s ID: ${subcontractor.id}`,
      metadata: `created with ID ${subcontractor.id}`,
      route: "subcontractor",
    });

    return subcontractor;
  }

  async createInsuranceWithFile(
    subcontractorId: number,
    file: Express.Multer["File"],
    company: string,
    expiration: string
  ) {
    const documentUrl = `/uploads/insurance/${file.filename}`;

    const subcontractor = await this.prisma.subcontractor.update({
      where: { id: subcontractorId },
      data: {
        insurances: {
          create: {
            company,
            expiration: new Date(expiration),
            documentUrl,
          },
        },
      },
      include: { insurances: true },
    });

    return subcontractor;
  }

  async findAll(): Promise<Subcontractor[]> {
    return this.prisma.subcontractor.findMany();
  }

  async findOne(id: number): Promise<Subcontractor | null> {
    return this.prisma.subcontractor.findUnique({
      where: { id },
      include: { insurances: true },
    });
  }

  async update(
    id: number,
    data: Prisma.SubcontractorUpdateInput
  ): Promise<Subcontractor> {
    return this.prisma.subcontractor.update({ where: { id }, data });
  }

  async remove(id: number): Promise<Subcontractor> {
    return this.prisma.subcontractor.delete({ where: { id } });
  }

  //create insurance for subcontractor
  async createInsurance(
    subcontractorId: number,
    data: Prisma.InsuranceCreateInput
  ): Promise<Subcontractor> {
    // Check if subcontractor exists
    const subcontractor = await this.prisma.subcontractor.findUnique({
      where: { id: subcontractorId },
      include: { insurances: true },
    });
    if (!subcontractor) {
      throw new Error(`Subcontractor with ID ${subcontractorId} not found`);
    }

    const updatedSubcontractor = await this.prisma.subcontractor.update({
      where: { id: subcontractorId },
      data: {
        insurances: {
          create: {
            company: data.company,
            expiration: data.expiration,
            documentUrl: data.documentUrl,
          },
        },
      },
      include: {
        insurances: true,
      },
    });
    //create a log entry for insurance creation
    await createLog({
      action: "SUBCONTRACTOR_UPDATED",
      details: `Insurance for Subcontractor ID ${subcontractorId} created`,
      metadata: `created with ID ${subcontractor.id}`,
      route: "subcontractor",
    });

    return updatedSubcontractor;
  }
}
