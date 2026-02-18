import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketGoalMediaCreateWithoutGoalInput } from './bucket-goal-media-create-without-goal.input';
import { Type } from 'class-transformer';
import { BucketGoalMediaCreateOrConnectWithoutGoalInput } from './bucket-goal-media-create-or-connect-without-goal.input';
import { BucketGoalMediaUpsertWithWhereUniqueWithoutGoalInput } from './bucket-goal-media-upsert-with-where-unique-without-goal.input';
import { BucketGoalMediaCreateManyGoalInputEnvelope } from './bucket-goal-media-create-many-goal-input-envelope.input';
import { Prisma } from '@prisma/client';
import { BucketGoalMediaWhereUniqueInput } from './bucket-goal-media-where-unique.input';
import { BucketGoalMediaUpdateWithWhereUniqueWithoutGoalInput } from './bucket-goal-media-update-with-where-unique-without-goal.input';
import { BucketGoalMediaUpdateManyWithWhereWithoutGoalInput } from './bucket-goal-media-update-many-with-where-without-goal.input';
import { BucketGoalMediaScalarWhereInput } from './bucket-goal-media-scalar-where.input';

@InputType()
export class BucketGoalMediaUpdateManyWithoutGoalNestedInput {

    @Field(() => [BucketGoalMediaCreateWithoutGoalInput], {nullable:true})
    @Type(() => BucketGoalMediaCreateWithoutGoalInput)
    create?: Array<BucketGoalMediaCreateWithoutGoalInput>;

    @Field(() => [BucketGoalMediaCreateOrConnectWithoutGoalInput], {nullable:true})
    @Type(() => BucketGoalMediaCreateOrConnectWithoutGoalInput)
    connectOrCreate?: Array<BucketGoalMediaCreateOrConnectWithoutGoalInput>;

    @Field(() => [BucketGoalMediaUpsertWithWhereUniqueWithoutGoalInput], {nullable:true})
    @Type(() => BucketGoalMediaUpsertWithWhereUniqueWithoutGoalInput)
    upsert?: Array<BucketGoalMediaUpsertWithWhereUniqueWithoutGoalInput>;

    @Field(() => BucketGoalMediaCreateManyGoalInputEnvelope, {nullable:true})
    @Type(() => BucketGoalMediaCreateManyGoalInputEnvelope)
    createMany?: BucketGoalMediaCreateManyGoalInputEnvelope;

    @Field(() => [BucketGoalMediaWhereUniqueInput], {nullable:true})
    @Type(() => BucketGoalMediaWhereUniqueInput)
    set?: Array<Prisma.AtLeast<BucketGoalMediaWhereUniqueInput, 'id'>>;

    @Field(() => [BucketGoalMediaWhereUniqueInput], {nullable:true})
    @Type(() => BucketGoalMediaWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<BucketGoalMediaWhereUniqueInput, 'id'>>;

    @Field(() => [BucketGoalMediaWhereUniqueInput], {nullable:true})
    @Type(() => BucketGoalMediaWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<BucketGoalMediaWhereUniqueInput, 'id'>>;

    @Field(() => [BucketGoalMediaWhereUniqueInput], {nullable:true})
    @Type(() => BucketGoalMediaWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<BucketGoalMediaWhereUniqueInput, 'id'>>;

    @Field(() => [BucketGoalMediaUpdateWithWhereUniqueWithoutGoalInput], {nullable:true})
    @Type(() => BucketGoalMediaUpdateWithWhereUniqueWithoutGoalInput)
    update?: Array<BucketGoalMediaUpdateWithWhereUniqueWithoutGoalInput>;

    @Field(() => [BucketGoalMediaUpdateManyWithWhereWithoutGoalInput], {nullable:true})
    @Type(() => BucketGoalMediaUpdateManyWithWhereWithoutGoalInput)
    updateMany?: Array<BucketGoalMediaUpdateManyWithWhereWithoutGoalInput>;

    @Field(() => [BucketGoalMediaScalarWhereInput], {nullable:true})
    @Type(() => BucketGoalMediaScalarWhereInput)
    deleteMany?: Array<BucketGoalMediaScalarWhereInput>;
}
