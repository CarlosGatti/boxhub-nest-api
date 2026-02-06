import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ReviewCardExportType } from '../prisma/review-card-export-type.enum';
import { ReviewCardExportStatus } from '../prisma/review-card-export-status.enum';
import { ReviewCardProject } from '../review-card-project/review-card-project.model';

@ObjectType()
export class ReviewCardExport {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    projectId!: number;

    @Field(() => ReviewCardExportType, {nullable:false})
    type!: keyof typeof ReviewCardExportType;

    @Field(() => String, {nullable:false})
    format!: string;

    @Field(() => ReviewCardExportStatus, {nullable:false,defaultValue:'QUEUED'})
    status!: keyof typeof ReviewCardExportStatus;

    @Field(() => String, {nullable:true})
    fileUrl!: string | null;

    @Field(() => String, {nullable:true})
    errorMessage!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => ReviewCardProject, {nullable:false})
    project?: ReviewCardProject;
}
