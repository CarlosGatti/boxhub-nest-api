import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCardProjectCreateNestedOneWithoutScansInput } from '../review-card-project/review-card-project-create-nested-one-without-scans.input';

@InputType()
export class ReviewCardScanEventCreateInput {

    @Field(() => String, {nullable:true})
    ipHash?: string;

    @Field(() => String, {nullable:true})
    userAgent?: string;

    @Field(() => String, {nullable:true})
    referer?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => ReviewCardProjectCreateNestedOneWithoutScansInput, {nullable:false})
    project!: ReviewCardProjectCreateNestedOneWithoutScansInput;
}
