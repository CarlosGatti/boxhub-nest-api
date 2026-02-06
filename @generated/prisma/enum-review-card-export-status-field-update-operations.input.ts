import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCardExportStatus } from './review-card-export-status.enum';

@InputType()
export class EnumReviewCardExportStatusFieldUpdateOperationsInput {

    @Field(() => ReviewCardExportStatus, {nullable:true})
    set?: keyof typeof ReviewCardExportStatus;
}
