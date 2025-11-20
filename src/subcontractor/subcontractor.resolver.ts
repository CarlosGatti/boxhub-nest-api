import { Resolver, Query, Mutation, Args, Int } from "@nestjs/graphql";
import { SubcontractorService } from "./subcontractor.service";
import { UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";
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
import { extname } from "path";
import { SubcontractorCreateInput } from "@generated/subcontractor/subcontractor-create.input";
import { Subcontractor } from "../../@generated/subcontractor/subcontractor.model";
import { CreateOneSubcontractorArgs } from "../../@generated/subcontractor/create-one-subcontractor.args";
import { UpdateOneSubcontractorArgs } from "../../@generated/subcontractor/update-one-subcontractor.args";
import { DeleteOneSubcontractorArgs } from "../../@generated/subcontractor/delete-one-subcontractor.args";
import { InsuranceCreateInput } from "../../@generated/insurance/insurance-create.input";
import { Insurance } from "../../@generated/insurance/insurance.model";

@Resolver(() => Subcontractor)
export class SubcontractorResolver {
  constructor(private readonly subcontractorService: SubcontractorService) {}

  @Mutation(() => Subcontractor)
  createSubcontractor(
    @Args("data") data: SubcontractorCreateInput
  ): Promise<Subcontractor> {
    return this.subcontractorService.create(data);
  }

  @Mutation(() => Insurance)
  @UseInterceptors(
    FileInterceptor("file", {
      storage: diskStorage({
        destination: "./uploads/insurance", // <- pasta desejada
        filename: (req: Express.Request, file: Express.Multer.File, cb: (error: Error | null, filename: string) => void) => {
          const uniqueName = `${Date.now()}-${file.originalname}`;
          cb(null, uniqueName);
        },
      }),
    })
  )
  async uploadInsurance(
    @Args("subcontractorId", { type: () => Int }) subcontractorId: number,
    @UploadedFile() file: Express.Multer.File,
    @Args("company") company: string,
    @Args("expiration") expiration: string
  ) {
    return this.subcontractorService.createInsuranceWithFile(
      subcontractorId,
      file,
      company,
      expiration
    );
  }

  @Query(() => [Subcontractor])
  async getAllSubcontractors(): Promise<Subcontractor[]> {
    return this.subcontractorService.findAll();
  }

  @Query(() => Subcontractor, { nullable: true })
  async getSubcontractorById(
    @Args("id", { type: () => Int }) id: number
  ): Promise<Subcontractor | null> {
    return this.subcontractorService.findOne(id);
  }

  //create insurance for subcontractor

  @Mutation(() => Subcontractor)
  async createInsurance(
    @Args("subcontractorId", { type: () => Int }) subcontractorId: number,

    @Args("data") data: InsuranceCreateInput
  ): Promise<Subcontractor> {
    return this.subcontractorService.createInsurance(subcontractorId, data);
  }

  // @Mutation(() => Subcontractor)
  // async updateSubcontractor(
  //   @Args() args: UpdateOneSubcontractorArgs
  // ): Promise<Subcontractor> {
  //   return this.subcontractorService.update(args.where.id, args.data)
  // }

  // @Mutation(() => Subcontractor)
  // async deleteSubcontractor(
  //   @Args() args: DeleteOneSubcontractorArgs
  // ): Promise<Subcontractor> {
  //   return this.subcontractorService.remove(args.where.id)
  // }

  // @Query(() => [Subcontractor], { name: 'prioritySubcontractors' })
  // async findPriority(): Promise<Subcontractor[]> {
  //   return this.subcontractorService.findPriority()
  // }

  // @Query(() => [Subcontractor], { name: 'webSubmittedSubcontractors' })
  // async findFromSite(): Promise<Subcontractor[]> {
  //   return this.subcontractorService.findFromSite()
  // }

  // @Query(() => [Subcontractor], { name: 'subcontractorsByStorage' })
  // async findByStorage(
  //   @Args('storageId', { type: () => Int }) storageId: number
  // ): Promise<Subcontractor[]> {
  //   return this.subcontractorService.findByStorage(storageId)
  // }
}
