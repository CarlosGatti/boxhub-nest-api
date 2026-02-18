import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketGoalLogCreateWithoutGoalInput } from './bucket-goal-log-create-without-goal.input';
import { Type } from 'class-transformer';
import { BucketGoalLogCreateOrConnectWithoutGoalInput } from './bucket-goal-log-create-or-connect-without-goal.input';
import { BucketGoalLogUpsertWithWhereUniqueWithoutGoalInput } from './bucket-goal-log-upsert-with-where-unique-without-goal.input';
import { BucketGoalLogCreateManyGoalInputEnvelope } from './bucket-goal-log-create-many-goal-input-envelope.input';
import { Prisma } from '@prisma/client';
import { BucketGoalLogWhereUniqueInput } from './bucket-goal-log-where-unique.input';
import { BucketGoalLogUpdateWithWhereUniqueWithoutGoalInput } from './bucket-goal-log-update-with-where-unique-without-goal.input';
import { BucketGoalLogUpdateManyWithWhereWithoutGoalInput } from './bucket-goal-log-update-many-with-where-without-goal.input';
import { BucketGoalLogScalarWhereInput } from './bucket-goal-log-scalar-where.input';

@InputType()
export class BucketGoalLogUpdateManyWithoutGoalNestedInput {

    @Field(() => [BucketGoalLogCreateWithoutGoalInput], {nullable:true})
    @Type(() => BucketGoalLogCreateWithoutGoalInput)
    create?: Array<BucketGoalLogCreateWithoutGoalInput>;

    @Field(() => [BucketGoalLogCreateOrConnectWithoutGoalInput], {nullable:true})
    @Type(() => BucketGoalLogCreateOrConnectWithoutGoalInput)
    connectOrCreate?: Array<BucketGoalLogCreateOrConnectWithoutGoalInput>;

    @Field(() => [BucketGoalLogUpsertWithWhereUniqueWithoutGoalInput], {nullable:true})
    @Type(() => BucketGoalLogUpsertWithWhereUniqueWithoutGoalInput)
    upsert?: Array<BucketGoalLogUpsertWithWhereUniqueWithoutGoalInput>;

    @Field(() => BucketGoalLogCreateManyGoalInputEnvelope, {nullable:true})
    @Type(() => BucketGoalLogCreateManyGoalInputEnvelope)
    createMany?: BucketGoalLogCreateManyGoalInputEnvelope;

    @Field(() => [BucketGoalLogWhereUniqueInput], {nullable:true})
    @Type(() => BucketGoalLogWhereUniqueInput)
    set?: Array<Prisma.AtLeast<BucketGoalLogWhereUniqueInput, 'id'>>;

    @Field(() => [BucketGoalLogWhereUniqueInput], {nullable:true})
    @Type(() => BucketGoalLogWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<BucketGoalLogWhereUniqueInput, 'id'>>;

    @Field(() => [BucketGoalLogWhereUniqueInput], {nullable:true})
    @Type(() => BucketGoalLogWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<BucketGoalLogWhereUniqueInput, 'id'>>;

    @Field(() => [BucketGoalLogWhereUniqueInput], {nullable:true})
    @Type(() => BucketGoalLogWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<BucketGoalLogWhereUniqueInput, 'id'>>;

    @Field(() => [BucketGoalLogUpdateWithWhereUniqueWithoutGoalInput], {nullable:true})
    @Type(() => BucketGoalLogUpdateWithWhereUniqueWithoutGoalInput)
    update?: Array<BucketGoalLogUpdateWithWhereUniqueWithoutGoalInput>;

    @Field(() => [BucketGoalLogUpdateManyWithWhereWithoutGoalInput], {nullable:true})
    @Type(() => BucketGoalLogUpdateManyWithWhereWithoutGoalInput)
    updateMany?: Array<BucketGoalLogUpdateManyWithWhereWithoutGoalInput>;

    @Field(() => [BucketGoalLogScalarWhereInput], {nullable:true})
    @Type(() => BucketGoalLogScalarWhereInput)
    deleteMany?: Array<BucketGoalLogScalarWhereInput>;
}
