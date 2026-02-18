import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketGoalUpdateWithoutLogsInput } from './bucket-goal-update-without-logs.input';
import { Type } from 'class-transformer';
import { BucketGoalCreateWithoutLogsInput } from './bucket-goal-create-without-logs.input';
import { BucketGoalWhereInput } from './bucket-goal-where.input';

@InputType()
export class BucketGoalUpsertWithoutLogsInput {

    @Field(() => BucketGoalUpdateWithoutLogsInput, {nullable:false})
    @Type(() => BucketGoalUpdateWithoutLogsInput)
    update!: BucketGoalUpdateWithoutLogsInput;

    @Field(() => BucketGoalCreateWithoutLogsInput, {nullable:false})
    @Type(() => BucketGoalCreateWithoutLogsInput)
    create!: BucketGoalCreateWithoutLogsInput;

    @Field(() => BucketGoalWhereInput, {nullable:true})
    @Type(() => BucketGoalWhereInput)
    where?: BucketGoalWhereInput;
}
