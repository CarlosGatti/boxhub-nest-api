import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BucketGoalLogWhereUniqueInput } from './bucket-goal-log-where-unique.input';
import { Type } from 'class-transformer';
import { BucketGoalLogUpdateWithoutGoalInput } from './bucket-goal-log-update-without-goal.input';

@InputType()
export class BucketGoalLogUpdateWithWhereUniqueWithoutGoalInput {

    @Field(() => BucketGoalLogWhereUniqueInput, {nullable:false})
    @Type(() => BucketGoalLogWhereUniqueInput)
    where!: Prisma.AtLeast<BucketGoalLogWhereUniqueInput, 'id'>;

    @Field(() => BucketGoalLogUpdateWithoutGoalInput, {nullable:false})
    @Type(() => BucketGoalLogUpdateWithoutGoalInput)
    data!: BucketGoalLogUpdateWithoutGoalInput;
}
