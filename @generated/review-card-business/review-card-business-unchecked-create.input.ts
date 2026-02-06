import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ReviewCardProjectUncheckedCreateNestedManyWithoutBusinessInput } from '../review-card-project/review-card-project-unchecked-create-nested-many-without-business.input';

@InputType()
export class ReviewCardBusinessUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

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

    @Field(() => ReviewCardProjectUncheckedCreateNestedManyWithoutBusinessInput, {nullable:true})
    projects?: ReviewCardProjectUncheckedCreateNestedManyWithoutBusinessInput;
}
