import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BucketGoalLogCreateInput } from './bucket-goal-log-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneBucketGoalLogArgs {

    @Field(() => BucketGoalLogCreateInput, {nullable:false})
    @Type(() => BucketGoalLogCreateInput)
    data!: BucketGoalLogCreateInput;
}
