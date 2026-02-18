import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketGoalCreateWithoutLogsInput } from './bucket-goal-create-without-logs.input';
import { Type } from 'class-transformer';
import { BucketGoalCreateOrConnectWithoutLogsInput } from './bucket-goal-create-or-connect-without-logs.input';
import { Prisma } from '@prisma/client';
import { BucketGoalWhereUniqueInput } from './bucket-goal-where-unique.input';

@InputType()
export class BucketGoalCreateNestedOneWithoutLogsInput {

    @Field(() => BucketGoalCreateWithoutLogsInput, {nullable:true})
    @Type(() => BucketGoalCreateWithoutLogsInput)
    create?: BucketGoalCreateWithoutLogsInput;

    @Field(() => BucketGoalCreateOrConnectWithoutLogsInput, {nullable:true})
    @Type(() => BucketGoalCreateOrConnectWithoutLogsInput)
    connectOrCreate?: BucketGoalCreateOrConnectWithoutLogsInput;

    @Field(() => BucketGoalWhereUniqueInput, {nullable:true})
    @Type(() => BucketGoalWhereUniqueInput)
    connect?: Prisma.AtLeast<BucketGoalWhereUniqueInput, 'id'>;
}
