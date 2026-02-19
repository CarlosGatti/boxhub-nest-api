import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketGoalCreateWithoutBucketVisionGoalLinksInput } from './bucket-goal-create-without-bucket-vision-goal-links.input';
import { Type } from 'class-transformer';
import { BucketGoalCreateOrConnectWithoutBucketVisionGoalLinksInput } from './bucket-goal-create-or-connect-without-bucket-vision-goal-links.input';
import { Prisma } from '@prisma/client';
import { BucketGoalWhereUniqueInput } from './bucket-goal-where-unique.input';

@InputType()
export class BucketGoalCreateNestedOneWithoutBucketVisionGoalLinksInput {

    @Field(() => BucketGoalCreateWithoutBucketVisionGoalLinksInput, {nullable:true})
    @Type(() => BucketGoalCreateWithoutBucketVisionGoalLinksInput)
    create?: BucketGoalCreateWithoutBucketVisionGoalLinksInput;

    @Field(() => BucketGoalCreateOrConnectWithoutBucketVisionGoalLinksInput, {nullable:true})
    @Type(() => BucketGoalCreateOrConnectWithoutBucketVisionGoalLinksInput)
    connectOrCreate?: BucketGoalCreateOrConnectWithoutBucketVisionGoalLinksInput;

    @Field(() => BucketGoalWhereUniqueInput, {nullable:true})
    @Type(() => BucketGoalWhereUniqueInput)
    connect?: Prisma.AtLeast<BucketGoalWhereUniqueInput, 'id'>;
}
