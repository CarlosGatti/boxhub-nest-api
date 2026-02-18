import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BucketGoalPinWhereUniqueInput } from './bucket-goal-pin-where-unique.input';
import { Type } from 'class-transformer';
import { BucketGoalPinCreateWithoutGoalInput } from './bucket-goal-pin-create-without-goal.input';

@InputType()
export class BucketGoalPinCreateOrConnectWithoutGoalInput {

    @Field(() => BucketGoalPinWhereUniqueInput, {nullable:false})
    @Type(() => BucketGoalPinWhereUniqueInput)
    where!: Prisma.AtLeast<BucketGoalPinWhereUniqueInput, 'id'>;

    @Field(() => BucketGoalPinCreateWithoutGoalInput, {nullable:false})
    @Type(() => BucketGoalPinCreateWithoutGoalInput)
    create!: BucketGoalPinCreateWithoutGoalInput;
}
