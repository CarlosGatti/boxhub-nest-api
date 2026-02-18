import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketGoalCreateWithoutUserInput } from './bucket-goal-create-without-user.input';
import { Type } from 'class-transformer';
import { BucketGoalCreateOrConnectWithoutUserInput } from './bucket-goal-create-or-connect-without-user.input';
import { BucketGoalCreateManyUserInputEnvelope } from './bucket-goal-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { BucketGoalWhereUniqueInput } from './bucket-goal-where-unique.input';

@InputType()
export class BucketGoalCreateNestedManyWithoutUserInput {

    @Field(() => [BucketGoalCreateWithoutUserInput], {nullable:true})
    @Type(() => BucketGoalCreateWithoutUserInput)
    create?: Array<BucketGoalCreateWithoutUserInput>;

    @Field(() => [BucketGoalCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => BucketGoalCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<BucketGoalCreateOrConnectWithoutUserInput>;

    @Field(() => BucketGoalCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => BucketGoalCreateManyUserInputEnvelope)
    createMany?: BucketGoalCreateManyUserInputEnvelope;

    @Field(() => [BucketGoalWhereUniqueInput], {nullable:true})
    @Type(() => BucketGoalWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<BucketGoalWhereUniqueInput, 'id'>>;
}
