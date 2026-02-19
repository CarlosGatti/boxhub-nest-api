import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketVisionGoalLinkScalarWhereInput } from './bucket-vision-goal-link-scalar-where.input';
import { Type } from 'class-transformer';
import { BucketVisionGoalLinkUpdateManyMutationInput } from './bucket-vision-goal-link-update-many-mutation.input';

@InputType()
export class BucketVisionGoalLinkUpdateManyWithWhereWithoutBoardInput {

    @Field(() => BucketVisionGoalLinkScalarWhereInput, {nullable:false})
    @Type(() => BucketVisionGoalLinkScalarWhereInput)
    where!: BucketVisionGoalLinkScalarWhereInput;

    @Field(() => BucketVisionGoalLinkUpdateManyMutationInput, {nullable:false})
    @Type(() => BucketVisionGoalLinkUpdateManyMutationInput)
    data!: BucketVisionGoalLinkUpdateManyMutationInput;
}
