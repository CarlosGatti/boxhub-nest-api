import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BucketGoalWhereUniqueInput } from './bucket-goal-where-unique.input';
import { Type } from 'class-transformer';
import { BucketGoalCreateWithoutBucketVisionGoalLinksInput } from './bucket-goal-create-without-bucket-vision-goal-links.input';

@InputType()
export class BucketGoalCreateOrConnectWithoutBucketVisionGoalLinksInput {

    @Field(() => BucketGoalWhereUniqueInput, {nullable:false})
    @Type(() => BucketGoalWhereUniqueInput)
    where!: Prisma.AtLeast<BucketGoalWhereUniqueInput, 'id'>;

    @Field(() => BucketGoalCreateWithoutBucketVisionGoalLinksInput, {nullable:false})
    @Type(() => BucketGoalCreateWithoutBucketVisionGoalLinksInput)
    create!: BucketGoalCreateWithoutBucketVisionGoalLinksInput;
}
