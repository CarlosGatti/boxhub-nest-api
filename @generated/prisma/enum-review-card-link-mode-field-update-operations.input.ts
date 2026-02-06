import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCardLinkMode } from './review-card-link-mode.enum';

@InputType()
export class EnumReviewCardLinkModeFieldUpdateOperationsInput {

    @Field(() => ReviewCardLinkMode, {nullable:true})
    set?: keyof typeof ReviewCardLinkMode;
}
