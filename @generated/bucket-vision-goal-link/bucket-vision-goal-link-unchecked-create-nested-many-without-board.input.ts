import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketVisionGoalLinkCreateWithoutBoardInput } from './bucket-vision-goal-link-create-without-board.input';
import { Type } from 'class-transformer';
import { BucketVisionGoalLinkCreateOrConnectWithoutBoardInput } from './bucket-vision-goal-link-create-or-connect-without-board.input';
import { BucketVisionGoalLinkCreateManyBoardInputEnvelope } from './bucket-vision-goal-link-create-many-board-input-envelope.input';
import { Prisma } from '@prisma/client';
import { BucketVisionGoalLinkWhereUniqueInput } from './bucket-vision-goal-link-where-unique.input';

@InputType()
export class BucketVisionGoalLinkUncheckedCreateNestedManyWithoutBoardInput {

    @Field(() => [BucketVisionGoalLinkCreateWithoutBoardInput], {nullable:true})
    @Type(() => BucketVisionGoalLinkCreateWithoutBoardInput)
    create?: Array<BucketVisionGoalLinkCreateWithoutBoardInput>;

    @Field(() => [BucketVisionGoalLinkCreateOrConnectWithoutBoardInput], {nullable:true})
    @Type(() => BucketVisionGoalLinkCreateOrConnectWithoutBoardInput)
    connectOrCreate?: Array<BucketVisionGoalLinkCreateOrConnectWithoutBoardInput>;

    @Field(() => BucketVisionGoalLinkCreateManyBoardInputEnvelope, {nullable:true})
    @Type(() => BucketVisionGoalLinkCreateManyBoardInputEnvelope)
    createMany?: BucketVisionGoalLinkCreateManyBoardInputEnvelope;

    @Field(() => [BucketVisionGoalLinkWhereUniqueInput], {nullable:true})
    @Type(() => BucketVisionGoalLinkWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<BucketVisionGoalLinkWhereUniqueInput, 'id' | 'boardId_goalId'>>;
}
