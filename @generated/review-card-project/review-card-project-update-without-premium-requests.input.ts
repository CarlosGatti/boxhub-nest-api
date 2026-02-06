import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { EnumReviewCardProjectStatusFieldUpdateOperationsInput } from '../prisma/enum-review-card-project-status-field-update-operations.input';
import { EnumReviewCardLinkModeFieldUpdateOperationsInput } from '../prisma/enum-review-card-link-mode-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserUpdateOneRequiredWithoutReviewCardProjectsNestedInput } from '../user/user-update-one-required-without-review-card-projects-nested.input';
import { Type } from 'class-transformer';
import { ReviewCardBusinessUpdateOneRequiredWithoutProjectsNestedInput } from '../review-card-business/review-card-business-update-one-required-without-projects-nested.input';
import { ReviewCardTemplateUpdateOneRequiredWithoutProjectsNestedInput } from '../review-card-template/review-card-template-update-one-required-without-projects-nested.input';
import { ReviewCardExportUpdateManyWithoutProjectNestedInput } from '../review-card-export/review-card-export-update-many-without-project-nested.input';
import { ReviewCardScanEventUpdateManyWithoutProjectNestedInput } from '../review-card-scan-event/review-card-scan-event-update-many-without-project-nested.input';

@InputType()
export class ReviewCardProjectUpdateWithoutPremiumRequestsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    slug?: NullableStringFieldUpdateOperationsInput;

    @Field(() => EnumReviewCardProjectStatusFieldUpdateOperationsInput, {nullable:true})
    status?: EnumReviewCardProjectStatusFieldUpdateOperationsInput;

    @Field(() => EnumReviewCardLinkModeFieldUpdateOperationsInput, {nullable:true})
    reviewLinkMode?: EnumReviewCardLinkModeFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    googleReviewUrlFinal?: NullableStringFieldUpdateOperationsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    designJson?: any;

    @Field(() => GraphQLJSON, {nullable:true})
    assetsJson?: any;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutReviewCardProjectsNestedInput, {nullable:true})
    @Type(() => UserUpdateOneRequiredWithoutReviewCardProjectsNestedInput)
    user?: UserUpdateOneRequiredWithoutReviewCardProjectsNestedInput;

    @Field(() => ReviewCardBusinessUpdateOneRequiredWithoutProjectsNestedInput, {nullable:true})
    business?: ReviewCardBusinessUpdateOneRequiredWithoutProjectsNestedInput;

    @Field(() => ReviewCardTemplateUpdateOneRequiredWithoutProjectsNestedInput, {nullable:true})
    template?: ReviewCardTemplateUpdateOneRequiredWithoutProjectsNestedInput;

    @Field(() => ReviewCardExportUpdateManyWithoutProjectNestedInput, {nullable:true})
    exports?: ReviewCardExportUpdateManyWithoutProjectNestedInput;

    @Field(() => ReviewCardScanEventUpdateManyWithoutProjectNestedInput, {nullable:true})
    scans?: ReviewCardScanEventUpdateManyWithoutProjectNestedInput;
}
