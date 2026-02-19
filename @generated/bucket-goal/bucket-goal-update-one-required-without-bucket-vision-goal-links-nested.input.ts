import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketGoalCreateWithoutBucketVisionGoalLinksInput } from './bucket-goal-create-without-bucket-vision-goal-links.input';
import { Type } from 'class-transformer';
import { BucketGoalCreateOrConnectWithoutBucketVisionGoalLinksInput } from './bucket-goal-create-or-connect-without-bucket-vision-goal-links.input';
import { BucketGoalUpsertWithoutBucketVisionGoalLinksInput } from './bucket-goal-upsert-without-bucket-vision-goal-links.input';
import { Prisma } from '@prisma/client';
import { BucketGoalWhereUniqueInput } from './bucket-goal-where-unique.input';
import { BucketGoalUpdateToOneWithWhereWithoutBucketVisionGoalLinksInput } from './bucket-goal-update-to-one-with-where-without-bucket-vision-goal-links.input';

@InputType()
export class BucketGoalUpdateOneRequiredWithoutBucketVisionGoalLinksNestedInput {

    @Field(() => BucketGoalCreateWithoutBucketVisionGoalLinksInput, {nullable:true})
    @Type(() => BucketGoalCreateWithoutBucketVisionGoalLinksInput)
    create?: BucketGoalCreateWithoutBucketVisionGoalLinksInput;

    @Field(() => BucketGoalCreateOrConnectWithoutBucketVisionGoalLinksInput, {nullable:true})
    @Type(() => BucketGoalCreateOrConnectWithoutBucketVisionGoalLinksInput)
    connectOrCreate?: BucketGoalCreateOrConnectWithoutBucketVisionGoalLinksInput;

    @Field(() => BucketGoalUpsertWithoutBucketVisionGoalLinksInput, {nullable:true})
    @Type(() => BucketGoalUpsertWithoutBucketVisionGoalLinksInput)
    upsert?: BucketGoalUpsertWithoutBucketVisionGoalLinksInput;

    @Field(() => BucketGoalWhereUniqueInput, {nullable:true})
    @Type(() => BucketGoalWhereUniqueInput)
    connect?: Prisma.AtLeast<BucketGoalWhereUniqueInput, 'id'>;

    @Field(() => BucketGoalUpdateToOneWithWhereWithoutBucketVisionGoalLinksInput, {nullable:true})
    @Type(() => BucketGoalUpdateToOneWithWhereWithoutBucketVisionGoalLinksInput)
    update?: BucketGoalUpdateToOneWithWhereWithoutBucketVisionGoalLinksInput;
}
