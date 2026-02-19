import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketVisionGoalLinkCreateWithoutGoalInput } from './bucket-vision-goal-link-create-without-goal.input';
import { Type } from 'class-transformer';
import { BucketVisionGoalLinkCreateOrConnectWithoutGoalInput } from './bucket-vision-goal-link-create-or-connect-without-goal.input';
import { BucketVisionGoalLinkUpsertWithWhereUniqueWithoutGoalInput } from './bucket-vision-goal-link-upsert-with-where-unique-without-goal.input';
import { BucketVisionGoalLinkCreateManyGoalInputEnvelope } from './bucket-vision-goal-link-create-many-goal-input-envelope.input';
import { Prisma } from '@prisma/client';
import { BucketVisionGoalLinkWhereUniqueInput } from './bucket-vision-goal-link-where-unique.input';
import { BucketVisionGoalLinkUpdateWithWhereUniqueWithoutGoalInput } from './bucket-vision-goal-link-update-with-where-unique-without-goal.input';
import { BucketVisionGoalLinkUpdateManyWithWhereWithoutGoalInput } from './bucket-vision-goal-link-update-many-with-where-without-goal.input';
import { BucketVisionGoalLinkScalarWhereInput } from './bucket-vision-goal-link-scalar-where.input';

@InputType()
export class BucketVisionGoalLinkUpdateManyWithoutGoalNestedInput {

    @Field(() => [BucketVisionGoalLinkCreateWithoutGoalInput], {nullable:true})
    @Type(() => BucketVisionGoalLinkCreateWithoutGoalInput)
    create?: Array<BucketVisionGoalLinkCreateWithoutGoalInput>;

    @Field(() => [BucketVisionGoalLinkCreateOrConnectWithoutGoalInput], {nullable:true})
    @Type(() => BucketVisionGoalLinkCreateOrConnectWithoutGoalInput)
    connectOrCreate?: Array<BucketVisionGoalLinkCreateOrConnectWithoutGoalInput>;

    @Field(() => [BucketVisionGoalLinkUpsertWithWhereUniqueWithoutGoalInput], {nullable:true})
    @Type(() => BucketVisionGoalLinkUpsertWithWhereUniqueWithoutGoalInput)
    upsert?: Array<BucketVisionGoalLinkUpsertWithWhereUniqueWithoutGoalInput>;

    @Field(() => BucketVisionGoalLinkCreateManyGoalInputEnvelope, {nullable:true})
    @Type(() => BucketVisionGoalLinkCreateManyGoalInputEnvelope)
    createMany?: BucketVisionGoalLinkCreateManyGoalInputEnvelope;

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

    @Field(() => [BucketVisionGoalLinkUpdateWithWhereUniqueWithoutGoalInput], {nullable:true})
    @Type(() => BucketVisionGoalLinkUpdateWithWhereUniqueWithoutGoalInput)
    update?: Array<BucketVisionGoalLinkUpdateWithWhereUniqueWithoutGoalInput>;

    @Field(() => [BucketVisionGoalLinkUpdateManyWithWhereWithoutGoalInput], {nullable:true})
    @Type(() => BucketVisionGoalLinkUpdateManyWithWhereWithoutGoalInput)
    updateMany?: Array<BucketVisionGoalLinkUpdateManyWithWhereWithoutGoalInput>;

    @Field(() => [BucketVisionGoalLinkScalarWhereInput], {nullable:true})
    @Type(() => BucketVisionGoalLinkScalarWhereInput)
    deleteMany?: Array<BucketVisionGoalLinkScalarWhereInput>;
}
