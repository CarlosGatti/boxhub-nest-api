import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketGoalLogCreateWithoutGoalInput } from './bucket-goal-log-create-without-goal.input';
import { Type } from 'class-transformer';
import { BucketGoalLogCreateOrConnectWithoutGoalInput } from './bucket-goal-log-create-or-connect-without-goal.input';
import { BucketGoalLogCreateManyGoalInputEnvelope } from './bucket-goal-log-create-many-goal-input-envelope.input';
import { Prisma } from '@prisma/client';
import { BucketGoalLogWhereUniqueInput } from './bucket-goal-log-where-unique.input';

@InputType()
export class BucketGoalLogUncheckedCreateNestedManyWithoutGoalInput {

    @Field(() => [BucketGoalLogCreateWithoutGoalInput], {nullable:true})
    @Type(() => BucketGoalLogCreateWithoutGoalInput)
    create?: Array<BucketGoalLogCreateWithoutGoalInput>;

    @Field(() => [BucketGoalLogCreateOrConnectWithoutGoalInput], {nullable:true})
    @Type(() => BucketGoalLogCreateOrConnectWithoutGoalInput)
    connectOrCreate?: Array<BucketGoalLogCreateOrConnectWithoutGoalInput>;

    @Field(() => BucketGoalLogCreateManyGoalInputEnvelope, {nullable:true})
    @Type(() => BucketGoalLogCreateManyGoalInputEnvelope)
    createMany?: BucketGoalLogCreateManyGoalInputEnvelope;

    @Field(() => [BucketGoalLogWhereUniqueInput], {nullable:true})
    @Type(() => BucketGoalLogWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<BucketGoalLogWhereUniqueInput, 'id'>>;
}
