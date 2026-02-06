import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutReviewCardBusinessesInput } from '../user/user-create-nested-one-without-review-card-businesses.input';
import { Type } from 'class-transformer';

@InputType()
export class ReviewCardBusinessCreateWithoutProjectsInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    placeId?: string;

    @Field(() => String, {nullable:true})
    googleReviewUrl?: string;

    @Field(() => String, {nullable:true})
    website?: string;

    @Field(() => String, {nullable:true})
    phone?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutReviewCardBusinessesInput, {nullable:false})
    @Type(() => UserCreateNestedOneWithoutReviewCardBusinessesInput)
    user!: UserCreateNestedOneWithoutReviewCardBusinessesInput;
}
