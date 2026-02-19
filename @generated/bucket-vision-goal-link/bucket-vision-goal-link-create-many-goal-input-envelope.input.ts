import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketVisionGoalLinkCreateManyGoalInput } from './bucket-vision-goal-link-create-many-goal.input';
import { Type } from 'class-transformer';

@InputType()
export class BucketVisionGoalLinkCreateManyGoalInputEnvelope {

    @Field(() => [BucketVisionGoalLinkCreateManyGoalInput], {nullable:false})
    @Type(() => BucketVisionGoalLinkCreateManyGoalInput)
    data!: Array<BucketVisionGoalLinkCreateManyGoalInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
