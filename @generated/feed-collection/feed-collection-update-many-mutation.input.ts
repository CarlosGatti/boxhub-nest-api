import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { FeedCollectionUpdatekeywordsInput } from './feed-collection-updatekeywords.input';
import { FeedCollectionUpdateblockedInput } from './feed-collection-updateblocked.input';
import { FeedCollectionUpdatepreferredDomainsInput } from './feed-collection-updatepreferred-domains.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class FeedCollectionUpdateManyMutationInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    icon?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    color?: NullableStringFieldUpdateOperationsInput;

    @Field(() => FeedCollectionUpdatekeywordsInput, {nullable:true})
    keywords?: FeedCollectionUpdatekeywordsInput;

    @Field(() => FeedCollectionUpdateblockedInput, {nullable:true})
    blocked?: FeedCollectionUpdateblockedInput;

    @Field(() => FeedCollectionUpdatepreferredDomainsInput, {nullable:true})
    preferredDomains?: FeedCollectionUpdatepreferredDomainsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isActive?: BoolFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
