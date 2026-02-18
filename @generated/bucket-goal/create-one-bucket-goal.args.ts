import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BucketGoalCreateInput } from './bucket-goal-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneBucketGoalArgs {

    @Field(() => BucketGoalCreateInput, {nullable:false})
    @Type(() => BucketGoalCreateInput)
    data!: BucketGoalCreateInput;
}
