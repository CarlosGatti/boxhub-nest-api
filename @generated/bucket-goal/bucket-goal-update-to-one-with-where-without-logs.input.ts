import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketGoalWhereInput } from './bucket-goal-where.input';
import { Type } from 'class-transformer';
import { BucketGoalUpdateWithoutLogsInput } from './bucket-goal-update-without-logs.input';

@InputType()
export class BucketGoalUpdateToOneWithWhereWithoutLogsInput {

    @Field(() => BucketGoalWhereInput, {nullable:true})
    @Type(() => BucketGoalWhereInput)
    where?: BucketGoalWhereInput;

    @Field(() => BucketGoalUpdateWithoutLogsInput, {nullable:false})
    @Type(() => BucketGoalUpdateWithoutLogsInput)
    data!: BucketGoalUpdateWithoutLogsInput;
}
