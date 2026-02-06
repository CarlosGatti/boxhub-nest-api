import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCardExportType } from './review-card-export-type.enum';

@InputType()
export class EnumReviewCardExportTypeFieldUpdateOperationsInput {

    @Field(() => ReviewCardExportType, {nullable:true})
    set?: keyof typeof ReviewCardExportType;
}
