import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketGoalPinCreateWithoutGoalInput } from './bucket-goal-pin-create-without-goal.input';
import { Type } from 'class-transformer';
import { BucketGoalPinCreateOrConnectWithoutGoalInput } from './bucket-goal-pin-create-or-connect-without-goal.input';
import { BucketGoalPinCreateManyGoalInputEnvelope } from './bucket-goal-pin-create-many-goal-input-envelope.input';
import { Prisma } from '@prisma/client';
import { BucketGoalPinWhereUniqueInput } from './bucket-goal-pin-where-unique.input';

@InputType()
export class BucketGoalPinUncheckedCreateNestedManyWithoutGoalInput {

    @Field(() => [BucketGoalPinCreateWithoutGoalInput], {nullable:true})
    @Type(() => BucketGoalPinCreateWithoutGoalInput)
    create?: Array<BucketGoalPinCreateWithoutGoalInput>;

    @Field(() => [BucketGoalPinCreateOrConnectWithoutGoalInput], {nullable:true})
    @Type(() => BucketGoalPinCreateOrConnectWithoutGoalInput)
    connectOrCreate?: Array<BucketGoalPinCreateOrConnectWithoutGoalInput>;

    @Field(() => BucketGoalPinCreateManyGoalInputEnvelope, {nullable:true})
    @Type(() => BucketGoalPinCreateManyGoalInputEnvelope)
    createMany?: BucketGoalPinCreateManyGoalInputEnvelope;

    @Field(() => [BucketGoalPinWhereUniqueInput], {nullable:true})
    @Type(() => BucketGoalPinWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<BucketGoalPinWhereUniqueInput, 'id'>>;
}
