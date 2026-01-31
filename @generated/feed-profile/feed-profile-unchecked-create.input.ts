import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { FeedCollectionUncheckedCreateNestedManyWithoutProfileInput } from '../feed-collection/feed-collection-unchecked-create-nested-many-without-profile.input';

@InputType()
export class FeedProfileUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => String, {nullable:true})
    timezone?: string;

    @Field(() => String, {nullable:true})
    language?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => FeedCollectionUncheckedCreateNestedManyWithoutProfileInput, {nullable:true})
    collections?: FeedCollectionUncheckedCreateNestedManyWithoutProfileInput;
}
