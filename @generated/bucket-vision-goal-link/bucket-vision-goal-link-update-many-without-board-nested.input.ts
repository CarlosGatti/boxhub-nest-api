import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketVisionGoalLinkCreateWithoutBoardInput } from './bucket-vision-goal-link-create-without-board.input';
import { Type } from 'class-transformer';
import { BucketVisionGoalLinkCreateOrConnectWithoutBoardInput } from './bucket-vision-goal-link-create-or-connect-without-board.input';
import { BucketVisionGoalLinkUpsertWithWhereUniqueWithoutBoardInput } from './bucket-vision-goal-link-upsert-with-where-unique-without-board.input';
import { BucketVisionGoalLinkCreateManyBoardInputEnvelope } from './bucket-vision-goal-link-create-many-board-input-envelope.input';
import { Prisma } from '@prisma/client';
import { BucketVisionGoalLinkWhereUniqueInput } from './bucket-vision-goal-link-where-unique.input';
import { BucketVisionGoalLinkUpdateWithWhereUniqueWithoutBoardInput } from './bucket-vision-goal-link-update-with-where-unique-without-board.input';
import { BucketVisionGoalLinkUpdateManyWithWhereWithoutBoardInput } from './bucket-vision-goal-link-update-many-with-where-without-board.input';
import { BucketVisionGoalLinkScalarWhereInput } from './bucket-vision-goal-link-scalar-where.input';

@InputType()
export class BucketVisionGoalLinkUpdateManyWithoutBoardNestedInput {

    @Field(() => [BucketVisionGoalLinkCreateWithoutBoardInput], {nullable:true})
    @Type(() => BucketVisionGoalLinkCreateWithoutBoardInput)
    create?: Array<BucketVisionGoalLinkCreateWithoutBoardInput>;

    @Field(() => [BucketVisionGoalLinkCreateOrConnectWithoutBoardInput], {nullable:true})
    @Type(() => BucketVisionGoalLinkCreateOrConnectWithoutBoardInput)
    connectOrCreate?: Array<BucketVisionGoalLinkCreateOrConnectWithoutBoardInput>;

    @Field(() => [BucketVisionGoalLinkUpsertWithWhereUniqueWithoutBoardInput], {nullable:true})
    @Type(() => BucketVisionGoalLinkUpsertWithWhereUniqueWithoutBoardInput)
    upsert?: Array<BucketVisionGoalLinkUpsertWithWhereUniqueWithoutBoardInput>;

    @Field(() => BucketVisionGoalLinkCreateManyBoardInputEnvelope, {nullable:true})
    @Type(() => BucketVisionGoalLinkCreateManyBoardInputEnvelope)
    createMany?: BucketVisionGoalLinkCreateManyBoardInputEnvelope;

    @Field(() => [BucketVisionGoalLinkWhereUniqueInput], {nullable:true})
    @Type(() => BucketVisionGoalLinkWhereUniqueInput)
    set?: Array<Prisma.AtLeast<BucketVisionGoalLinkWhereUniqueInput, 'id' | 'boardId_goalId'>>;

    @Field(() => [BucketVisionGoalLinkWhereUniqueInput], {nullable:true})
    @Type(() => BucketVisionGoalLinkWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<BucketVisionGoalLinkWhereUniqueInput, 'id' | 'boardId_goalId'>>;

    @Field(() => [BucketVisionGoalLinkWhereUniqueInput], {nullable:true})
    @Type(() => BucketVisionGoalLinkWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<BucketVisionGoalLinkWhereUniqueInput, 'id' | 'boardId_goalId'>>;

    @Field(() => [BucketVisionGoalLinkWhereUniqueInput], {nullable:true})
    @Type(() => BucketVisionGoalLinkWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<BucketVisionGoalLinkWhereUniqueInput, 'id' | 'boardId_goalId'>>;

    @Field(() => [BucketVisionGoalLinkUpdateWithWhereUniqueWithoutBoardInput], {nullable:true})
    @Type(() => BucketVisionGoalLinkUpdateWithWhereUniqueWithoutBoardInput)
    update?: Array<BucketVisionGoalLinkUpdateWithWhereUniqueWithoutBoardInput>;

    @Field(() => [BucketVisionGoalLinkUpdateManyWithWhereWithoutBoardInput], {nullable:true})
    @Type(() => BucketVisionGoalLinkUpdateManyWithWhereWithoutBoardInput)
    updateMany?: Array<BucketVisionGoalLinkUpdateManyWithWhereWithoutBoardInput>;

    @Field(() => [BucketVisionGoalLinkScalarWhereInput], {nullable:true})
    @Type(() => BucketVisionGoalLinkScalarWhereInput)
    deleteMany?: Array<BucketVisionGoalLinkScalarWhereInput>;
}
