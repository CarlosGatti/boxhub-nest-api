import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BucketGoalPinCreateInput } from './bucket-goal-pin-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneBucketGoalPinArgs {

    @Field(() => BucketGoalPinCreateInput, {nullable:false})
    @Type(() => BucketGoalPinCreateInput)
    data!: BucketGoalPinCreateInput;
}
