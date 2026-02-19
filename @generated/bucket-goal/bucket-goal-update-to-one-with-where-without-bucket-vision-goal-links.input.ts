import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketGoalWhereInput } from './bucket-goal-where.input';
import { Type } from 'class-transformer';
import { BucketGoalUpdateWithoutBucketVisionGoalLinksInput } from './bucket-goal-update-without-bucket-vision-goal-links.input';

@InputType()
export class BucketGoalUpdateToOneWithWhereWithoutBucketVisionGoalLinksInput {

    @Field(() => BucketGoalWhereInput, {nullable:true})
    @Type(() => BucketGoalWhereInput)
    where?: BucketGoalWhereInput;

    @Field(() => BucketGoalUpdateWithoutBucketVisionGoalLinksInput, {nullable:false})
    @Type(() => BucketGoalUpdateWithoutBucketVisionGoalLinksInput)
    data!: BucketGoalUpdateWithoutBucketVisionGoalLinksInput;
}
