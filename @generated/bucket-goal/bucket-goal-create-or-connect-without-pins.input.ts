import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BucketGoalWhereUniqueInput } from './bucket-goal-where-unique.input';
import { Type } from 'class-transformer';
import { BucketGoalCreateWithoutPinsInput } from './bucket-goal-create-without-pins.input';

@InputType()
export class BucketGoalCreateOrConnectWithoutPinsInput {

    @Field(() => BucketGoalWhereUniqueInput, {nullable:false})
    @Type(() => BucketGoalWhereUniqueInput)
    where!: Prisma.AtLeast<BucketGoalWhereUniqueInput, 'id'>;

    @Field(() => BucketGoalCreateWithoutPinsInput, {nullable:false})
    @Type(() => BucketGoalCreateWithoutPinsInput)
    create!: BucketGoalCreateWithoutPinsInput;
}
