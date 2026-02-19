import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BucketVisionGoalLinkCreateInput } from './bucket-vision-goal-link-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneBucketVisionGoalLinkArgs {

    @Field(() => BucketVisionGoalLinkCreateInput, {nullable:false})
    @Type(() => BucketVisionGoalLinkCreateInput)
    data!: BucketVisionGoalLinkCreateInput;
}
