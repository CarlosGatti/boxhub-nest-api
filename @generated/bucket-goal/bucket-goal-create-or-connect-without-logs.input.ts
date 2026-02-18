import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BucketGoalWhereUniqueInput } from './bucket-goal-where-unique.input';
import { Type } from 'class-transformer';
import { BucketGoalCreateWithoutLogsInput } from './bucket-goal-create-without-logs.input';

@InputType()
export class BucketGoalCreateOrConnectWithoutLogsInput {

    @Field(() => BucketGoalWhereUniqueInput, {nullable:false})
    @Type(() => BucketGoalWhereUniqueInput)
    where!: Prisma.AtLeast<BucketGoalWhereUniqueInput, 'id'>;

    @Field(() => BucketGoalCreateWithoutLogsInput, {nullable:false})
    @Type(() => BucketGoalCreateWithoutLogsInput)
    create!: BucketGoalCreateWithoutLogsInput;
}
