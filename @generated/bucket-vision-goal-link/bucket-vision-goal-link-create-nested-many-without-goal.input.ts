import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketVisionGoalLinkCreateWithoutGoalInput } from './bucket-vision-goal-link-create-without-goal.input';
import { Type } from 'class-transformer';
import { BucketVisionGoalLinkCreateOrConnectWithoutGoalInput } from './bucket-vision-goal-link-create-or-connect-without-goal.input';
import { BucketVisionGoalLinkCreateManyGoalInputEnvelope } from './bucket-vision-goal-link-create-many-goal-input-envelope.input';
import { Prisma } from '@prisma/client';
import { BucketVisionGoalLinkWhereUniqueInput } from './bucket-vision-goal-link-where-unique.input';

@InputType()
export class BucketVisionGoalLinkCreateNestedManyWithoutGoalInput {

    @Field(() => [BucketVisionGoalLinkCreateWithoutGoalInput], {nullable:true})
    @Type(() => BucketVisionGoalLinkCreateWithoutGoalInput)
    create?: Array<BucketVisionGoalLinkCreateWithoutGoalInput>;

    @Field(() => [BucketVisionGoalLinkCreateOrConnectWithoutGoalInput], {nullable:true})
    @Type(() => BucketVisionGoalLinkCreateOrConnectWithoutGoalInput)
    connectOrCreate?: Array<BucketVisionGoalLinkCreateOrConnectWithoutGoalInput>;

    @Field(() => BucketVisionGoalLinkCreateManyGoalInputEnvelope, {nullable:true})
    @Type(() => BucketVisionGoalLinkCreateManyGoalInputEnvelope)
    createMany?: BucketVisionGoalLinkCreateManyGoalInputEnvelope;

    @Field(() => [BucketVisionGoalLinkWhereUniqueInput], {nullable:true})
    @Type(() => BucketVisionGoalLinkWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<BucketVisionGoalLinkWhereUniqueInput, 'id' | 'boardId_goalId'>>;
}
