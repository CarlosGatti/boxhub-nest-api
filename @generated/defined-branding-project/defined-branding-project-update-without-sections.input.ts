import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { EnumDefinedBrandingProjectStatusFieldUpdateOperationsInput } from '../prisma/enum-defined-branding-project-status-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { DefinedClientUpdateOneRequiredWithoutBrandingProjectsNestedInput } from '../defined-client/defined-client-update-one-required-without-branding-projects-nested.input';
import { Type } from 'class-transformer';
import { DefinedProjectUpdateOneWithoutBrandingProjectsNestedInput } from '../defined-project/defined-project-update-one-without-branding-projects-nested.input';
import { DefinedBrandingAssetUpdateManyWithoutBrandingProjectNestedInput } from '../defined-branding-asset/defined-branding-asset-update-many-without-branding-project-nested.input';

@InputType()
export class DefinedBrandingProjectUpdateWithoutSectionsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    concept?: NullableStringFieldUpdateOperationsInput;

    @Field(() => EnumDefinedBrandingProjectStatusFieldUpdateOperationsInput, {nullable:true})
    status?: EnumDefinedBrandingProjectStatusFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isPublic?: BoolFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isFeatured?: BoolFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    coverImageUrl?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    brandManualPdfUrl?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    sourcePdfFileName?: NullableStringFieldUpdateOperationsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    metadata?: any;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DefinedClientUpdateOneRequiredWithoutBrandingProjectsNestedInput, {nullable:true})
    @Type(() => DefinedClientUpdateOneRequiredWithoutBrandingProjectsNestedInput)
    client?: DefinedClientUpdateOneRequiredWithoutBrandingProjectsNestedInput;

    @Field(() => DefinedProjectUpdateOneWithoutBrandingProjectsNestedInput, {nullable:true})
    @Type(() => DefinedProjectUpdateOneWithoutBrandingProjectsNestedInput)
    project?: DefinedProjectUpdateOneWithoutBrandingProjectsNestedInput;

    @Field(() => DefinedBrandingAssetUpdateManyWithoutBrandingProjectNestedInput, {nullable:true})
    assets?: DefinedBrandingAssetUpdateManyWithoutBrandingProjectNestedInput;
}
