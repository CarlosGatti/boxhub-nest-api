import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BucketGoalMediaWhereUniqueInput } from './bucket-goal-media-where-unique.input';
import { Type } from 'class-transformer';
import { BucketGoalMediaCreateWithoutGoalInput } from './bucket-goal-media-create-without-goal.input';

@InputType()
export class BucketGoalMediaCreateOrConnectWithoutGoalInput {

    @Field(() => BucketGoalMediaWhereUniqueInput, {nullable:false})
    @Type(() => BucketGoalMediaWhereUniqueInput)
    where!: Prisma.AtLeast<BucketGoalMediaWhereUniqueInput, 'id'>;

    @Field(() => BucketGoalMediaCreateWithoutGoalInput, {nullable:false})
    @Type(() => BucketGoalMediaCreateWithoutGoalInput)
    create!: BucketGoalMediaCreateWithoutGoalInput;
}
