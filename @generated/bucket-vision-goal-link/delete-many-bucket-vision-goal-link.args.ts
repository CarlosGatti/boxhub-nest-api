import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BucketVisionGoalLinkWhereInput } from './bucket-vision-goal-link-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyBucketVisionGoalLinkArgs {

    @Field(() => BucketVisionGoalLinkWhereInput, {nullable:true})
    @Type(() => BucketVisionGoalLinkWhereInput)
    where?: BucketVisionGoalLinkWhereInput;
}
