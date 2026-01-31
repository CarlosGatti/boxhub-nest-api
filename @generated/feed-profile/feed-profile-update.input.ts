import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserUpdateOneRequiredWithoutFeedProfileNestedInput } from '../user/user-update-one-required-without-feed-profile-nested.input';
import { Type } from 'class-transformer';
import { FeedCollectionUpdateManyWithoutProfileNestedInput } from '../feed-collection/feed-collection-update-many-without-profile-nested.input';

@InputType()
export class FeedProfileUpdateInput {

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    timezone?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    language?: NullableStringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutFeedProfileNestedInput, {nullable:true})
    @Type(() => UserUpdateOneRequiredWithoutFeedProfileNestedInput)
    user?: UserUpdateOneRequiredWithoutFeedProfileNestedInput;

    @Field(() => FeedCollectionUpdateManyWithoutProfileNestedInput, {nullable:true})
    collections?: FeedCollectionUpdateManyWithoutProfileNestedInput;
}
