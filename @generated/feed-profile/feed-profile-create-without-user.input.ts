import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedCollectionCreateNestedManyWithoutProfileInput } from '../feed-collection/feed-collection-create-nested-many-without-profile.input';

@InputType()
export class FeedProfileCreateWithoutUserInput {

    @Field(() => String, {nullable:true})
    timezone?: string;

    @Field(() => String, {nullable:true})
    language?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => FeedCollectionCreateNestedManyWithoutProfileInput, {nullable:true})
    collections?: FeedCollectionCreateNestedManyWithoutProfileInput;
}
