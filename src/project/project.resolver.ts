// src/modules/project/project.resolver.ts

import { Resolver, Query, Mutation, Args, Int } from "@nestjs/graphql";
import { ProjectService } from "./project.service";
import { Project } from "../../@generated/project/project.model";
import { ProjectCreateInput } from "@generated/project/project-create.input";
import { ConstructionLogCreateInput } from "../../@generated/construction-log/construction-log-create.input";
import { ConstructionLog } from "../../@generated/construction-log/construction-log.model";
import { LogComment } from "../../@generated/log-comment/log-comment.model";
import { FindManyProjectArgs } from "../../@generated/project/find-many-project.args";
import { LogType } from "../../@generated/prisma/log-type.enum";
import { ProjectUpdateInput } from "@generated/project/project-update.input";
import { CurrentUser } from "src/user/current-user.decorator";
import { LogCommentReply } from "../../@generated/log-comment-reply/log-comment-reply.model";
import { User } from "@generated/user/user.model";
import { UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";
import { ProjectDocument } from "../../@generated/project-document/project-document.model";
import { DocumentType } from "../../@generated/prisma/document-type.enum";
import { PermitInspection } from "../../@generated/permit-inspection/permit-inspection.model";
import { PermitKind } from "../../@generated/prisma/permit-kind.enum";
import { PermitStatus } from "../../@generated/prisma/permit-status.enum";
import { uploadOptions } from "../utils/upload-options";

import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
  Body,
  Param,
  ParseIntPipe,
} from "@nestjs/common";

import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";

@Resolver(() => Project)
export class ProjectResolver {
  constructor(private readonly projectService: ProjectService) {}

  @Mutation(() => Project)
  async createProject(
    @Args("data") data: ProjectCreateInput
  ): Promise<Project> {
    return this.projectService.create(data);
  }

  @Query(() => [Project])
  async getAllProjects(@Args() args: FindManyProjectArgs): Promise<Project[]> {
    return this.projectService.findAll();
  }

  // get project by id
  @Query(() => Project, { nullable: true })
  async getProjectById(
    @Args("id", { type: () => Int }) id: number
  ): Promise<Project | null> {
    return this.projectService.findOne(id);
  }

  @Mutation(() => ConstructionLog)
  addConstructionLog(
    @Args("projectId", { type: () => Int }) projectId: number,
    @Args("data") data: ConstructionLogCreateInput
  ): Promise<ConstructionLog> {
    return this.projectService.addConstructionLog(projectId, data);
  }

  @Mutation(() => ConstructionLog)
  deleteConstructionLog(
    @Args("logId", { type: () => Int }) logId: number
  ): Promise<ConstructionLog> {
    return this.projectService.deleteConstructionLog(logId);
  }

  @Query(() => [ConstructionLog])
  getLogsByProject(
    @Args("projectId", { type: () => Int }) projectId: number
  ): Promise<ConstructionLog[]> {
    return this.projectService.getLogsByProject(projectId);
  }

  //getLogBuLogId
  @Query(() => ConstructionLog, { nullable: true })
  getLogByLogId(
    @Args("logId", { type: () => Int }) logId: number
  ): Promise<ConstructionLog | null> {
    return this.projectService.getLogByLogId(logId);
  }

  @Mutation(() => ConstructionLog)
  @UseInterceptors(
    FileInterceptor("file", {
      storage: diskStorage({
        destination: "./uploads/construction-logs",
        filename: (req: any, file: Express.Multer.File, cb: (error: Error | null, filename: string) => void) => {
          const uniqueName = `${Date.now()}-${file.originalname}`;
          cb(null, uniqueName);
        },
      }),
      fileFilter: (req: any, file: Express.Multer.File, cb: (error: Error | null, acceptFile: boolean) => void) => {
        const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
        if (allowedTypes.includes(file.mimetype)) {
          cb(null, true);
        } else {
          cb(new Error("Invalid file type. Only images are allowed."), false);
        }
      },
    })
  )
  async addConstructionLogWithFile(
    @Args("projectId", { type: () => Int }) projectId: number,
    @Args("title") title: string,
    @Args("description") description: string,
    @Args("type", { type: () => LogType }) type: keyof typeof LogType,
    @CurrentUser("id") userId: number,
    @UploadedFile() file: Express.Multer.File
  ): Promise<ConstructionLog> {
    const imagePath = `/uploads/construction-logs/${file.filename}`;

    const data: ConstructionLogCreateInput = {
      title,
      description,
      type,
      images: [imagePath],

      user: { connect: { id: userId } },
      project: { connect: { id: projectId } },
    };
    return this.projectService.addConstructionLog(projectId, data);
  }

  @Mutation(() => LogComment)
  @UseGuards(JwtAuthGuard)
  async addLogComment(
    @Args("logId", { type: () => Int }) logId: number,
    @CurrentUser() user: User,
    @Args("content") content: string
  ) {
    return this.projectService.createComment({
      content,
      log: { connect: { id: logId } },
      user: { connect: { id: user.id } },
    });
  }

  @Mutation(() => LogCommentReply)
  @UseGuards(JwtAuthGuard)
  async addLogCommentReply(
    @Args("commentId", { type: () => Int }) commentId: number,
    @CurrentUser() user: User,
    @Args("content") content: string
  ) {
    return this.projectService.createReply({
      content,
      comment: { connect: { id: commentId } },
      user: { connect: { id: user.id } },
    });
  }

  @Query(() => [LogComment])
  async getCommentsByLog(@Args("logId", { type: () => Int }) logId: number) {
    return this.projectService.getCommentsByLog(logId);
  }

  @Mutation(() => ProjectDocument)
  async addProjectDocument(
    @Args("projectId", { type: () => Int }) projectId: number,
    @Args("name") name: string,
    @Args("fileUrl") fileUrl: string,
    @Args("type", { type: () => DocumentType }) type: DocumentType,
    @CurrentUser("id") userId: number
  ): Promise<ProjectDocument> {
    console.log("Adding document to project:");
    return this.projectService.addDocumentToProject({
      name,
      fileUrl,
      type,
      project: { connect: { id: projectId } },
    });
  }

  @Query(() => [ProjectDocument])
  async getDocumentsByProject(
    @Args("projectId", { type: () => Int }) projectId: number
  ): Promise<ProjectDocument[]> {
    return this.projectService.getDocumentsByProject(projectId);
  }

  @Mutation(() => ProjectDocument)
  async removeProjectDocument(
    @Args("id", { type: () => Int }) id: number
  ): Promise<ProjectDocument> {
    return this.projectService.removeDocument(id);
  }

  @Mutation(() => PermitInspection)
  @UseGuards(JwtAuthGuard)
  async addPermitInspection(
    @Args("projectId", { type: () => Int }) projectId: number,
    @Args("number") number: string,
    @Args("kind", { type: () => PermitKind }) kind: PermitKind,
    @Args("status", { type: () => PermitStatus }) status: PermitStatus,
    @CurrentUser("id") userId: number, // <- AQUI
    @Args("fileUrl") fileUrl: string
  ) {
    if (!userId) {
      throw new Error("User ID is not defined (authentication required)");
    }

    return this.projectService.addPermit({
      number,
      kind,
      status,
      fileUrl: `/uploads/project-permits/${fileUrl}`,
      project: { connect: { id: projectId } },
     
    });
  }

  @Query(() => [PermitInspection])
  getPermitsByProject(
    @Args("projectId", { type: () => Int }) projectId: number
  ) {
    return this.projectService.getPermitsByProject(projectId);
  }
}
