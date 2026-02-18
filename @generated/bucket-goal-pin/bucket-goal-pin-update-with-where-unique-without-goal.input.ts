import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BucketGoalPinWhereUniqueInput } from './bucket-goal-pin-where-unique.input';
import { Type } from 'class-transformer';
import { BucketGoalPinUpdateWithoutGoalInput } from './bucket-goal-pin-update-without-goal.input';

@InputType()
export class BucketGoalPinUpdateWithWhereUniqueWithoutGoalInput {

    @Field(() => BucketGoalPinWhereUniqueInput, {nullable:false})
    @Type(() => BucketGoalPinWhereUniqueInput)
    where!: Prisma.AtLeast<BucketGoalPinWhereUniqueInput, 'id'>;

    @Field(() => BucketGoalPinUpdateWithoutGoalInput, {nullable:false})
    @Type(() => BucketGoalPinUpdateWithoutGoalInput)
    data!: BucketGoalPinUpdateWithoutGoalInput;
}
