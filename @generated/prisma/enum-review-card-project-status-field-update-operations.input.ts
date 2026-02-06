import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCardProjectStatus } from './review-card-project-status.enum';

@InputType()
export class EnumReviewCardProjectStatusFieldUpdateOperationsInput {

    @Field(() => ReviewCardProjectStatus, {nullable:true})
    set?: keyof typeof ReviewCardProjectStatus;
}
