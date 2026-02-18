import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketGoalCreateWithoutPinsInput } from './bucket-goal-create-without-pins.input';
import { Type } from 'class-transformer';
import { BucketGoalCreateOrConnectWithoutPinsInput } from './bucket-goal-create-or-connect-without-pins.input';
import { Prisma } from '@prisma/client';
import { BucketGoalWhereUniqueInput } from './bucket-goal-where-unique.input';

@InputType()
export class BucketGoalCreateNestedOneWithoutPinsInput {

    @Field(() => BucketGoalCreateWithoutPinsInput, {nullable:true})
    @Type(() => BucketGoalCreateWithoutPinsInput)
    create?: BucketGoalCreateWithoutPinsInput;

    @Field(() => BucketGoalCreateOrConnectWithoutPinsInput, {nullable:true})
    @Type(() => BucketGoalCreateOrConnectWithoutPinsInput)
    connectOrCreate?: BucketGoalCreateOrConnectWithoutPinsInput;

    @Field(() => BucketGoalWhereUniqueInput, {nullable:true})
    @Type(() => BucketGoalWhereUniqueInput)
    connect?: Prisma.AtLeast<BucketGoalWhereUniqueInput, 'id'>;
}
