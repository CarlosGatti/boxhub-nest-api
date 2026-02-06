import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ReviewCardExportType } from '../prisma/review-card-export-type.enum';
import { ReviewCardExportStatus } from '../prisma/review-card-export-status.enum';

@InputType()
export class ReviewCardExportCreateManyInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:false})
    projectId!: number;

    @Field(() => ReviewCardExportType, {nullable:false})
    type!: keyof typeof ReviewCardExportType;

    @Field(() => String, {nullable:false})
    format!: string;

    @Field(() => ReviewCardExportStatus, {nullable:true})
    status?: keyof typeof ReviewCardExportStatus;

    @Field(() => String, {nullable:true})
    fileUrl?: string;

    @Field(() => String, {nullable:true})
    errorMessage?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
