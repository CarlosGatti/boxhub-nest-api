import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCardProjectCreateNestedManyWithoutBusinessInput } from '../review-card-project/review-card-project-create-nested-many-without-business.input';

@InputType()
export class ReviewCardBusinessCreateWithoutUserInput {

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

    @Field(() => ReviewCardProjectCreateNestedManyWithoutBusinessInput, {nullable:true})
    projects?: ReviewCardProjectCreateNestedManyWithoutBusinessInput;
}
