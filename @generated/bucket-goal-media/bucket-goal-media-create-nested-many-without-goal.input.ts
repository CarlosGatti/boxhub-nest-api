import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketGoalMediaCreateWithoutGoalInput } from './bucket-goal-media-create-without-goal.input';
import { Type } from 'class-transformer';
import { BucketGoalMediaCreateOrConnectWithoutGoalInput } from './bucket-goal-media-create-or-connect-without-goal.input';
import { BucketGoalMediaCreateManyGoalInputEnvelope } from './bucket-goal-media-create-many-goal-input-envelope.input';
import { Prisma } from '@prisma/client';
import { BucketGoalMediaWhereUniqueInput } from './bucket-goal-media-where-unique.input';

@InputType()
export class BucketGoalMediaCreateNestedManyWithoutGoalInput {

    @Field(() => [BucketGoalMediaCreateWithoutGoalInput], {nullable:true})
    @Type(() => BucketGoalMediaCreateWithoutGoalInput)
    create?: Array<BucketGoalMediaCreateWithoutGoalInput>;

    @Field(() => [BucketGoalMediaCreateOrConnectWithoutGoalInput], {nullable:true})
    @Type(() => BucketGoalMediaCreateOrConnectWithoutGoalInput)
    connectOrCreate?: Array<BucketGoalMediaCreateOrConnectWithoutGoalInput>;

    @Field(() => BucketGoalMediaCreateManyGoalInputEnvelope, {nullable:true})
    @Type(() => BucketGoalMediaCreateManyGoalInputEnvelope)
    createMany?: BucketGoalMediaCreateManyGoalInputEnvelope;

    @Field(() => [BucketGoalMediaWhereUniqueInput], {nullable:true})
    @Type(() => BucketGoalMediaWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<BucketGoalMediaWhereUniqueInput, 'id'>>;
}
