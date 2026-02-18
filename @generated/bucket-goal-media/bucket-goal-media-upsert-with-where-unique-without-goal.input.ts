import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BucketGoalMediaWhereUniqueInput } from './bucket-goal-media-where-unique.input';
import { Type } from 'class-transformer';
import { BucketGoalMediaUpdateWithoutGoalInput } from './bucket-goal-media-update-without-goal.input';
import { BucketGoalMediaCreateWithoutGoalInput } from './bucket-goal-media-create-without-goal.input';

@InputType()
export class BucketGoalMediaUpsertWithWhereUniqueWithoutGoalInput {

    @Field(() => BucketGoalMediaWhereUniqueInput, {nullable:false})
    @Type(() => BucketGoalMediaWhereUniqueInput)
    where!: Prisma.AtLeast<BucketGoalMediaWhereUniqueInput, 'id'>;

    @Field(() => BucketGoalMediaUpdateWithoutGoalInput, {nullable:false})
    @Type(() => BucketGoalMediaUpdateWithoutGoalInput)
    update!: BucketGoalMediaUpdateWithoutGoalInput;

    @Field(() => BucketGoalMediaCreateWithoutGoalInput, {nullable:false})
    @Type(() => BucketGoalMediaCreateWithoutGoalInput)
    create!: BucketGoalMediaCreateWithoutGoalInput;
}
