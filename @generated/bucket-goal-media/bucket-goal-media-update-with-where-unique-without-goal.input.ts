import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BucketGoalMediaWhereUniqueInput } from './bucket-goal-media-where-unique.input';
import { Type } from 'class-transformer';
import { BucketGoalMediaUpdateWithoutGoalInput } from './bucket-goal-media-update-without-goal.input';

@InputType()
export class BucketGoalMediaUpdateWithWhereUniqueWithoutGoalInput {

    @Field(() => BucketGoalMediaWhereUniqueInput, {nullable:false})
    @Type(() => BucketGoalMediaWhereUniqueInput)
    where!: Prisma.AtLeast<BucketGoalMediaWhereUniqueInput, 'id'>;

    @Field(() => BucketGoalMediaUpdateWithoutGoalInput, {nullable:false})
    @Type(() => BucketGoalMediaUpdateWithoutGoalInput)
    data!: BucketGoalMediaUpdateWithoutGoalInput;
}
