import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BucketVisionGoalLinkCreateManyInput } from './bucket-vision-goal-link-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyBucketVisionGoalLinkArgs {

    @Field(() => [BucketVisionGoalLinkCreateManyInput], {nullable:false})
    @Type(() => BucketVisionGoalLinkCreateManyInput)
    data!: Array<BucketVisionGoalLinkCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
