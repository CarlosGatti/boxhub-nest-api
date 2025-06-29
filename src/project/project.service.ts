// src/modules/project/project.service.ts

import {
  ConstructionLog,
  Prisma,
  Project,
  ProjectDocument,
} from "@prisma/client";

import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma.service";

@Injectable()
export class ProjectService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Prisma.ProjectCreateInput): Promise<Project> {
    return this.prisma.project.create({ data });
  }

  async findAll(): Promise<Project[]> {
    return this.prisma.project.findMany({
      include: {
        responsible: true,
        logs: true,
        documents: true,
      },
    });
  }

  async findOne(id: number): Promise<Project | null> {
    return this.prisma.project.findUnique({
      where: { id },
      include: {
        responsible: true,
        logs: true,
        documents: true,
      },
    });
  }

  async update(id: number, data: Prisma.ProjectUpdateInput): Promise<Project> {
    return this.prisma.project.update({
      where: { id },
      data,
    });
  }

  async remove(id: number): Promise<Project> {
    return this.prisma.project.delete({
      where: { id },
    });
  }

  // Construction Logs
  async addConstructionLog(
    projectId: number,
    data: Prisma.ConstructionLogCreateWithoutProjectInput
  ): Promise<ConstructionLog> {
    return this.prisma.constructionLog.create({
      data: {
        ...data,
        project: { connect: { id: projectId } },
      },
      include: {
        user: true, // Include user who created the log
      },
    });
  }

  async getLogsByProject(projectId: number): Promise<ConstructionLog[]> {
    return this.prisma.constructionLog.findMany({
      where: { projectId },
      orderBy: { createdAt: "desc" },
    });
  }

  //getLogByLogId
  async getLogByLogId(logId: number): Promise<ConstructionLog | null> {
    return this.prisma.constructionLog.findUnique({
      where: { id: logId },
      include: {
        user: true, // Include user who created the log
        project: true, // Include the project associated with the log
      },
    });
  }

  async deleteConstructionLog(logId: number): Promise<ConstructionLog> {
    return this.prisma.constructionLog.delete({
      where: { id: logId },
    });
  }

  createComment(data: Prisma.LogCommentCreateInput) {
    return this.prisma.logComment.create({ data });
  }

  createReply(data: Prisma.LogCommentReplyCreateInput) {
    return this.prisma.logCommentReply.create({ data });
  }

  getCommentsByLog(logId: number) {
    return this.prisma.logComment.findMany({
      where: { logId },
      include: {
        user: true,

        replies: {
          include: { user: true },
        },
      },
      orderBy: { createdAt: "asc" },
    });
  }

  async addDocumentToProject(
    data: Prisma.ProjectDocumentCreateInput
  ): Promise<ProjectDocument> {
    return this.prisma.projectDocument.create({ data });
  }

  async getDocumentsByProject(projectId: number): Promise<ProjectDocument[]> {
    return this.prisma.projectDocument.findMany({
      where: { projectId },
      orderBy: { createdAt: "desc" },
    });
  }

  async removeDocument(id: number): Promise<ProjectDocument> {
    return this.prisma.projectDocument.delete({
      where: { id },
    });
  }

  async addPermit(data: Prisma.PermitInspectionCreateInput) {
    return this.prisma.permitInspection.create({ data });
  }

  async updatePermit(id: number, data: Prisma.PermitInspectionUpdateInput) {
    return this.prisma.permitInspection.update({ where: { id }, data });
  }

  async getPermitsByProject(projectId: number) {
    return this.prisma.permitInspection.findMany({
      where: { projectId },
      orderBy: { createdAt: "desc" },
    });
  }
}
