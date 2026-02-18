import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketGoalPinCreateWithoutGoalInput } from './bucket-goal-pin-create-without-goal.input';
import { Type } from 'class-transformer';
import { BucketGoalPinCreateOrConnectWithoutGoalInput } from './bucket-goal-pin-create-or-connect-without-goal.input';
import { BucketGoalPinUpsertWithWhereUniqueWithoutGoalInput } from './bucket-goal-pin-upsert-with-where-unique-without-goal.input';
import { BucketGoalPinCreateManyGoalInputEnvelope } from './bucket-goal-pin-create-many-goal-input-envelope.input';
import { Prisma } from '@prisma/client';
import { BucketGoalPinWhereUniqueInput } from './bucket-goal-pin-where-unique.input';
import { BucketGoalPinUpdateWithWhereUniqueWithoutGoalInput } from './bucket-goal-pin-update-with-where-unique-without-goal.input';
import { BucketGoalPinUpdateManyWithWhereWithoutGoalInput } from './bucket-goal-pin-update-many-with-where-without-goal.input';
import { BucketGoalPinScalarWhereInput } from './bucket-goal-pin-scalar-where.input';

@InputType()
export class BucketGoalPinUpdateManyWithoutGoalNestedInput {

    @Field(() => [BucketGoalPinCreateWithoutGoalInput], {nullable:true})
    @Type(() => BucketGoalPinCreateWithoutGoalInput)
    create?: Array<BucketGoalPinCreateWithoutGoalInput>;

    @Field(() => [BucketGoalPinCreateOrConnectWithoutGoalInput], {nullable:true})
    @Type(() => BucketGoalPinCreateOrConnectWithoutGoalInput)
    connectOrCreate?: Array<BucketGoalPinCreateOrConnectWithoutGoalInput>;

    @Field(() => [BucketGoalPinUpsertWithWhereUniqueWithoutGoalInput], {nullable:true})
    @Type(() => BucketGoalPinUpsertWithWhereUniqueWithoutGoalInput)
    upsert?: Array<BucketGoalPinUpsertWithWhereUniqueWithoutGoalInput>;

    @Field(() => BucketGoalPinCreateManyGoalInputEnvelope, {nullable:true})
    @Type(() => BucketGoalPinCreateManyGoalInputEnvelope)
    createMany?: BucketGoalPinCreateManyGoalInputEnvelope;

    @Field(() => [BucketGoalPinWhereUniqueInput], {nullable:true})
    @Type(() => BucketGoalPinWhereUniqueInput)
    set?: Array<Prisma.AtLeast<BucketGoalPinWhereUniqueInput, 'id'>>;

    @Field(() => [BucketGoalPinWhereUniqueInput], {nullable:true})
    @Type(() => BucketGoalPinWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<BucketGoalPinWhereUniqueInput, 'id'>>;

    @Field(() => [BucketGoalPinWhereUniqueInput], {nullable:true})
    @Type(() => BucketGoalPinWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<BucketGoalPinWhereUniqueInput, 'id'>>;

    @Field(() => [BucketGoalPinWhereUniqueInput], {nullable:true})
    @Type(() => BucketGoalPinWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<BucketGoalPinWhereUniqueInput, 'id'>>;

    @Field(() => [BucketGoalPinUpdateWithWhereUniqueWithoutGoalInput], {nullable:true})
    @Type(() => BucketGoalPinUpdateWithWhereUniqueWithoutGoalInput)
    update?: Array<BucketGoalPinUpdateWithWhereUniqueWithoutGoalInput>;

    @Field(() => [BucketGoalPinUpdateManyWithWhereWithoutGoalInput], {nullable:true})
    @Type(() => BucketGoalPinUpdateManyWithWhereWithoutGoalInput)
    updateMany?: Array<BucketGoalPinUpdateManyWithWhereWithoutGoalInput>;

    @Field(() => [BucketGoalPinScalarWhereInput], {nullable:true})
    @Type(() => BucketGoalPinScalarWhereInput)
    deleteMany?: Array<BucketGoalPinScalarWhereInput>;
}
