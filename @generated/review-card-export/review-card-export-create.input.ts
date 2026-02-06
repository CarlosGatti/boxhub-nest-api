import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCardExportType } from '../prisma/review-card-export-type.enum';
import { ReviewCardExportStatus } from '../prisma/review-card-export-status.enum';
import { ReviewCardProjectCreateNestedOneWithoutExportsInput } from '../review-card-project/review-card-project-create-nested-one-without-exports.input';

@InputType()
export class ReviewCardExportCreateInput {

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

    @Field(() => ReviewCardProjectCreateNestedOneWithoutExportsInput, {nullable:false})
    project!: ReviewCardProjectCreateNestedOneWithoutExportsInput;
}
