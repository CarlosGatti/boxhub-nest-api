import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketGoalUpdateWithoutBucketVisionGoalLinksInput } from './bucket-goal-update-without-bucket-vision-goal-links.input';
import { Type } from 'class-transformer';
import { BucketGoalCreateWithoutBucketVisionGoalLinksInput } from './bucket-goal-create-without-bucket-vision-goal-links.input';
import { BucketGoalWhereInput } from './bucket-goal-where.input';

@InputType()
export class BucketGoalUpsertWithoutBucketVisionGoalLinksInput {

    @Field(() => BucketGoalUpdateWithoutBucketVisionGoalLinksInput, {nullable:false})
    @Type(() => BucketGoalUpdateWithoutBucketVisionGoalLinksInput)
    update!: BucketGoalUpdateWithoutBucketVisionGoalLinksInput;

    @Field(() => BucketGoalCreateWithoutBucketVisionGoalLinksInput, {nullable:false})
    @Type(() => BucketGoalCreateWithoutBucketVisionGoalLinksInput)
    create!: BucketGoalCreateWithoutBucketVisionGoalLinksInput;

    @Field(() => BucketGoalWhereInput, {nullable:true})
    @Type(() => BucketGoalWhereInput)
    where?: BucketGoalWhereInput;
}
