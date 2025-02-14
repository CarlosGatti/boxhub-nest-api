import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { EnumVisibilityFieldUpdateOperationsInput } from '../prisma/enum-visibility-field-update-operations.input';
import { CommunityUpdateOneWithoutPublicationsNestedInput } from '../community/community-update-one-without-publications-nested.input';
import { EventUpdateOneWithoutPublicationsNestedInput } from '../event/event-update-one-without-publications-nested.input';
import { PostUpdateOneRequiredWithoutPublicationNestedInput } from '../post/post-update-one-required-without-publication-nested.input';
import { UserUpdateOneWithoutPublicationsNestedInput } from '../user/user-update-one-without-publications-nested.input';
import { PublicationLikeUpdateManyWithoutPublicationNestedInput } from '../publication-like/publication-like-update-many-without-publication-nested.input';

@InputType()
export class PublicationUpdateWithoutCommentsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: StringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    published?: BoolFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => EnumVisibilityFieldUpdateOperationsInput, {nullable:true})
    visibility?: EnumVisibilityFieldUpdateOperationsInput;

    @Field(() => CommunityUpdateOneWithoutPublicationsNestedInput, {nullable:true})
    community?: CommunityUpdateOneWithoutPublicationsNestedInput;

    @Field(() => EventUpdateOneWithoutPublicationsNestedInput, {nullable:true})
    event?: EventUpdateOneWithoutPublicationsNestedInput;

    @Field(() => PostUpdateOneRequiredWithoutPublicationNestedInput, {nullable:true})
    post?: PostUpdateOneRequiredWithoutPublicationNestedInput;

    @Field(() => UserUpdateOneWithoutPublicationsNestedInput, {nullable:true})
    user?: UserUpdateOneWithoutPublicationsNestedInput;

    @Field(() => PublicationLikeUpdateManyWithoutPublicationNestedInput, {nullable:true})
    likes?: PublicationLikeUpdateManyWithoutPublicationNestedInput;
}
