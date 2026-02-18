import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketGoalCreateWithoutUserInput } from './bucket-goal-create-without-user.input';
import { Type } from 'class-transformer';
import { BucketGoalCreateOrConnectWithoutUserInput } from './bucket-goal-create-or-connect-without-user.input';
import { BucketGoalUpsertWithWhereUniqueWithoutUserInput } from './bucket-goal-upsert-with-where-unique-without-user.input';
import { BucketGoalCreateManyUserInputEnvelope } from './bucket-goal-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { BucketGoalWhereUniqueInput } from './bucket-goal-where-unique.input';
import { BucketGoalUpdateWithWhereUniqueWithoutUserInput } from './bucket-goal-update-with-where-unique-without-user.input';
import { BucketGoalUpdateManyWithWhereWithoutUserInput } from './bucket-goal-update-many-with-where-without-user.input';
import { BucketGoalScalarWhereInput } from './bucket-goal-scalar-where.input';

@InputType()
export class BucketGoalUncheckedUpdateManyWithoutUserNestedInput {

    @Field(() => [BucketGoalCreateWithoutUserInput], {nullable:true})
    @Type(() => BucketGoalCreateWithoutUserInput)
    create?: Array<BucketGoalCreateWithoutUserInput>;

    @Field(() => [BucketGoalCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => BucketGoalCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<BucketGoalCreateOrConnectWithoutUserInput>;

    @Field(() => [BucketGoalUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => BucketGoalUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<BucketGoalUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => BucketGoalCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => BucketGoalCreateManyUserInputEnvelope)
    createMany?: BucketGoalCreateManyUserInputEnvelope;

    @Field(() => [BucketGoalWhereUniqueInput], {nullable:true})
    @Type(() => BucketGoalWhereUniqueInput)
    set?: Array<Prisma.AtLeast<BucketGoalWhereUniqueInput, 'id'>>;

    @Field(() => [BucketGoalWhereUniqueInput], {nullable:true})
    @Type(() => BucketGoalWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<BucketGoalWhereUniqueInput, 'id'>>;

    @Field(() => [BucketGoalWhereUniqueInput], {nullable:true})
    @Type(() => BucketGoalWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<BucketGoalWhereUniqueInput, 'id'>>;

    @Field(() => [BucketGoalWhereUniqueInput], {nullable:true})
    @Type(() => BucketGoalWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<BucketGoalWhereUniqueInput, 'id'>>;

    @Field(() => [BucketGoalUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => BucketGoalUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<BucketGoalUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [BucketGoalUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => BucketGoalUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<BucketGoalUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [BucketGoalScalarWhereInput], {nullable:true})
    @Type(() => BucketGoalScalarWhereInput)
    deleteMany?: Array<BucketGoalScalarWhereInput>;
}
