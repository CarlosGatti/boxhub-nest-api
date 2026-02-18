import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BucketGoalLogWhereUniqueInput } from './bucket-goal-log-where-unique.input';
import { Type } from 'class-transformer';
import { BucketGoalLogUpdateWithoutGoalInput } from './bucket-goal-log-update-without-goal.input';
import { BucketGoalLogCreateWithoutGoalInput } from './bucket-goal-log-create-without-goal.input';

@InputType()
export class BucketGoalLogUpsertWithWhereUniqueWithoutGoalInput {

    @Field(() => BucketGoalLogWhereUniqueInput, {nullable:false})
    @Type(() => BucketGoalLogWhereUniqueInput)
    where!: Prisma.AtLeast<BucketGoalLogWhereUniqueInput, 'id'>;

    @Field(() => BucketGoalLogUpdateWithoutGoalInput, {nullable:false})
    @Type(() => BucketGoalLogUpdateWithoutGoalInput)
    update!: BucketGoalLogUpdateWithoutGoalInput;

    @Field(() => BucketGoalLogCreateWithoutGoalInput, {nullable:false})
    @Type(() => BucketGoalLogCreateWithoutGoalInput)
    create!: BucketGoalLogCreateWithoutGoalInput;
}
