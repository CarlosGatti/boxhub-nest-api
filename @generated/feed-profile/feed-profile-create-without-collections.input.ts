import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutFeedProfileInput } from '../user/user-create-nested-one-without-feed-profile.input';
import { Type } from 'class-transformer';

@InputType()
export class FeedProfileCreateWithoutCollectionsInput {

    @Field(() => String, {nullable:true})
    timezone?: string;

    @Field(() => String, {nullable:true})
    language?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutFeedProfileInput, {nullable:false})
    @Type(() => UserCreateNestedOneWithoutFeedProfileInput)
    user!: UserCreateNestedOneWithoutFeedProfileInput;
}
