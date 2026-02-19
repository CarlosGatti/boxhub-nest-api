import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BucketVisionGoalLinkUpdateManyMutationInput } from './bucket-vision-goal-link-update-many-mutation.input';
import { Type } from 'class-transformer';
import { BucketVisionGoalLinkWhereInput } from './bucket-vision-goal-link-where.input';

@ArgsType()
export class UpdateManyBucketVisionGoalLinkArgs {

    @Field(() => BucketVisionGoalLinkUpdateManyMutationInput, {nullable:false})
    @Type(() => BucketVisionGoalLinkUpdateManyMutationInput)
    data!: BucketVisionGoalLinkUpdateManyMutationInput;

    @Field(() => BucketVisionGoalLinkWhereInput, {nullable:true})
    @Type(() => BucketVisionGoalLinkWhereInput)
    where?: BucketVisionGoalLinkWhereInput;
}
